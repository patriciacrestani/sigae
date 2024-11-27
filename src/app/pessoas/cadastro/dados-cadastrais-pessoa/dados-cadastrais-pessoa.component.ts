import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escola, IEscola } from '../../../models/escola';
import { ESCOLAS } from '../../../mocks/escolas-mock';
import { formFieldLimits } from '../../../config/formConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { dadosCadastraisFormConfig } from './dados-cadastrais-pessoa-form-config';
import { PessoasService } from '../../pessoas.service';
import { Pessoa } from '../../../models/pessoa';

@Component({
  selector: 'app-dados-cadastrais-pessoa',
  standalone: false,
  templateUrl: './dados-cadastrais-pessoa.component.html',
  styleUrl: './dados-cadastrais-pessoa.component.css'
})
export class DadosCadastraisPessoaComponent {
  pessoaForm: FormGroup;
  escolas: IEscola[] = ESCOLAS;
  dadosCadastraisFormConfig = dadosCadastraisFormConfig;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pessoasService: PessoasService
  ) {
    this.createForm();
  }

  buscaPessoaSalva() {
    if(!!this.pessoasService.getPessoa()) {
      let pessoa = new Pessoa();
      pessoa.map(this.pessoasService.getPessoa());
      this.atualizaFormulario(pessoa);
    }
  }

  createForm() {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(this.dadosCadastraisFormConfig.maxLengths.padrao)])],
      nomeSocial: ['', Validators.maxLength(this.dadosCadastraisFormConfig.maxLengths.padrao)],
      cpf: ['', Validators.compose([Validators.required, Validators.maxLength(this.dadosCadastraisFormConfig.lengths.cpf), Validators.minLength(this.dadosCadastraisFormConfig.lengths.cpf)])],
      cnpj: ['', Validators.compose([Validators.required, Validators.maxLength(this.dadosCadastraisFormConfig.lengths.cnpj), Validators.minLength(this.dadosCadastraisFormConfig.lengths.cnpj)])],
      escola: ['', Validators.required]
    });

    this.buscaPessoaSalva();
  }

  atualizaFormulario(pessoa: Pessoa) {
    Object.keys(this.pessoaForm.controls).forEach(campo => {
      if(!!pessoa[campo]) {
        switch(campo) {
          case 'escola':
            this.pessoaForm.get(campo).setValue(pessoa[campo].id);
            break;
          default:
            this.pessoaForm.get(campo).setValue(pessoa[campo]);
            break;
        }
      }
    })
  }

  desabilitaAvancar(): boolean {
    return this.pessoaForm.invalid;
  }

  avancar() {
    let pessoa = new Pessoa();
    pessoa.map(this.pessoaForm.getRawValue());
    this.pessoasService.salvaPessoa(pessoa);
    this.router.navigate(['..', 'dados-contato'], { relativeTo: this.route });
  }
}
