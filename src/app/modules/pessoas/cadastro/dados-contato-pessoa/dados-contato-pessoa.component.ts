import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dadosContatoFormConfig } from './dados-contato-pessoa-form-config';
import { PessoasService } from '../../pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../../../models/pessoa';

@Component({
  selector: 'app-dados-contato-pessoa',
  standalone: false,
  templateUrl: './dados-contato-pessoa.component.html',
  styleUrl: './dados-contato-pessoa.component.css'
})
export class DadosContatoPessoaComponent {
  contatoForm: FormGroup;
  dadosContatoFormConfig = dadosContatoFormConfig;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pessoasService: PessoasService
  ) {
    this.createForm();
  }

  createForm(): void {
    this.contatoForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(this.dadosContatoFormConfig.maxLengths.curto)])],
      telefones: this.formBuilder.array([])
    });
    this.adicionaTelefone();
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
    if(!pessoa || !pessoa.contato) {
      return;
    }

    if(!!pessoa.contato.email) {
      this.contatoForm.get("email").setValue(pessoa.contato.email);
    }

    if(!!pessoa.contato.telefones && pessoa.contato.telefones.length > 0) {
      for (let index = 0; index < pessoa.contato.telefones.length; index++) {
        if(index == 0) {
          this.telefones.at(0).get("telefone").setValue(pessoa.contato.telefones[0]);
        } else {
          this.adicionaTelefone(pessoa.contato.telefones[index]);
        }
      }
    } 
  }

  get telefones(): FormArray {
    return this.contatoForm.get("telefones") as FormArray;
  }

  adicionaTelefone(telefone?): void {
    if(this.telefones) {
      this.telefones.push(
        this.formBuilder.group({
          telefone: [telefone ? telefone : '', Validators.compose([Validators.required, Validators.maxLength(this.dadosContatoFormConfig.lengths.telefone)])]
        })
      );
    }
  }

  removeTelefone(index: number): void {
    if(this.telefones && this.telefones.length > 0){
      this.telefones.removeAt(index);
    }
  }

  exibeBotaoRemoverTelefone(): boolean {
    return (this.telefones.length > 1);
  }
  
  desabilitaAvancar(): boolean {
    return this.contatoForm.invalid;
  }

  getDadosForm() {
    let dadosContato = this.contatoForm.getRawValue();
    dadosContato.telefones = dadosContato.telefones.map(telefone => telefone.telefone);
    return dadosContato;
  }

  avancar() {
    let pessoa = new Pessoa();
    pessoa.mapContato(this.getDadosForm());
    this.pessoasService.salvaPessoa(pessoa);
    this.router.navigate(['..', 'dados-endereco'], { relativeTo: this.route });
  }
}
