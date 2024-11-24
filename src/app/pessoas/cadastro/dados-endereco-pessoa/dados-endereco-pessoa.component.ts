import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldLimits } from '../../../config/formConfig';
import { PAISES } from '../../../mocks/paises-mock';

@Component({
  selector: 'app-dados-endereco-pessoa',
  standalone: false,
  templateUrl: './dados-endereco-pessoa.component.html',
  styleUrl: './dados-endereco-pessoa.component.css'
})
export class DadosEnderecoPessoaComponent {
  // field lengths
  padraoMaxLength: number = formFieldLimits.maxLengths.padrao;
  padraoMinLength: number = formFieldLimits.minLengths.padrao;
  curtoMaxLength: number = formFieldLimits.maxLengths.curto;
  cepLength: number = formFieldLimits.lengths.cep;

  // placeholders
  logradouroPlaceholder: string = formFieldLimits.placeholders.logradouro;
  cidadePlaceholder: string = formFieldLimits.placeholders.cidade;
  cepPlaceholder: string = formFieldLimits.placeholders.cep;
  estadoPlaceholder: string = formFieldLimits.placeholders.estado;
  paisPlaceholder: string = formFieldLimits.placeholders.email;

  // masks
  cepMask: string = formFieldLimits.masks.cep;

  enderecoForm: FormGroup;
  paises: string[] = PAISES;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.enderecoForm = this.formBuilder.group({
      logradouro: ['', Validators.compose([Validators.required, Validators.maxLength(this.padraoMaxLength)])],
      cidade: ['', Validators.compose([Validators.required, Validators.maxLength(this.curtoMaxLength)])],
      cep: ['', Validators.compose([Validators.required, Validators.maxLength(this.cepLength)])],
      estado: ['', Validators.compose([Validators.required, Validators.maxLength(this.curtoMaxLength)])],
      pais: ['', Validators.required]
    });
  }
}