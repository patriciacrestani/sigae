import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escola } from '../../../models/escola';
import { ESCOLAS } from '../../../mocks/escolas-mock';
import { formFieldLimits } from '../../../config/formConfig';

@Component({
  selector: 'app-dados-cadastrais-pessoa',
  standalone: false,
  templateUrl: './dados-cadastrais-pessoa.component.html',
  styleUrl: './dados-cadastrais-pessoa.component.css'
})
export class DadosCadastraisPessoaComponent {
  // field lengths
  padraoMaxLength: number = formFieldLimits.maxLengths.padrao;
  padraoMinLength: number = formFieldLimits.minLengths.padrao;
  cpfLength: number = formFieldLimits.lengths.cpf;
  cnpjLength: number = formFieldLimits.lengths.cnpj;

  // masks
  cpfMask: string = formFieldLimits.masks.cpf;
  cnpjMask: string = formFieldLimits.masks.cnpj;

  // placeholders
  nomePlaceholder: string = formFieldLimits.placeholders.nome;
  nomeSocialPlaceholder: string = formFieldLimits.placeholders.nomeSocial;
  cpfPlaceholder: string = formFieldLimits.placeholders.cpf;
  cnpjPlaceholder: string = formFieldLimits.placeholders.cnpj;
  escolaPlaceholder: string = formFieldLimits.placeholders.escola;

  formPessoa: FormGroup;
  escolas: Escola[] = ESCOLAS;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.formPessoa = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(this.padraoMaxLength)])],
      nomeSocial: ['', Validators.maxLength(this.padraoMaxLength)],
      cpf: ['', Validators.compose([Validators.required, Validators.maxLength(this.cpfLength)])],
      cnpj: ['', Validators.compose([Validators.required, Validators.maxLength(this.cnpjLength)])],
      escola: ['', Validators.required]
    });
  }
}
