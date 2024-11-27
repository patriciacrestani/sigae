import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldLimits } from '../../../config/formConfig';
import { PAISES } from '../../../mocks/paises-mock';
import { dadosEnderecoFormConfig } from './dados-endereco-pessoa-form-config';
import { Pessoa } from '../../../models/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasService } from '../../pessoas.service';

@Component({
  selector: 'app-dados-endereco-pessoa',
  standalone: false,
  templateUrl: './dados-endereco-pessoa.component.html',
  styleUrl: './dados-endereco-pessoa.component.css'
})
export class DadosEnderecoPessoaComponent {
  enderecoForm: FormGroup;
  paises: string[] = PAISES;
  dadosEnderecoFormConfig = dadosEnderecoFormConfig;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pessoasService: PessoasService
  ) {
    this.createForm();
  }

  createForm() {
    this.enderecoForm = this.formBuilder.group({
      logradouro: ['', Validators.compose([Validators.required, Validators.maxLength(this.dadosEnderecoFormConfig.maxLengths.padrao)])],
      cidade: ['', Validators.compose([Validators.required, Validators.maxLength(this.dadosEnderecoFormConfig.maxLengths.curto)])],
      cep: ['', Validators.compose([Validators.required, Validators.maxLength(this.dadosEnderecoFormConfig.lengths.cep)])],
      estado: ['', Validators.compose([Validators.required, Validators.maxLength(this.dadosEnderecoFormConfig.maxLengths.curto)])],
      pais: ['', Validators.required]
    });
    this.buscaPessoaSalva();
  }

  buscaPessoaSalva() {
    if(!!this.pessoasService.getPessoa()) {
      let pessoa = new Pessoa();
      pessoa.map(this.pessoasService.getPessoa());
      this.atualizaFormulario(pessoa);
    }
  }

  atualizaFormulario(pessoa: Pessoa) {
    if(!pessoa || !pessoa.endereco) {
      return;
    }

    Object.keys(this.enderecoForm.controls).forEach(campo => {
      if(!!pessoa.endereco[campo]) {
        this.enderecoForm.get(campo).setValue(pessoa.endereco[campo]);
      }
    })
  }

  desabilitaAvancar(): boolean {
    return this.enderecoForm.invalid;
  }
  
  avancar() {
    let pessoa = new Pessoa();
    pessoa.mapEndereco(this.enderecoForm.getRawValue());
    this.pessoasService.salvaPessoaState(pessoa);
    this.router.navigate(['../..'], { relativeTo: this.route });
  }
}