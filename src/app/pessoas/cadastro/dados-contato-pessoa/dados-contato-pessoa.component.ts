import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldLimits } from '../../../config/formConfig';

@Component({
  selector: 'app-dados-contato-pessoa',
  standalone: false,
  templateUrl: './dados-contato-pessoa.component.html',
  styleUrl: './dados-contato-pessoa.component.css'
})
export class DadosContatoPessoaComponent {
  // field lengths
  curtoMaxLength: number = formFieldLimits.maxLengths.curto;
  telefoneLength: number = formFieldLimits.lengths.telefone;

  // masks
  telefoneMask: string = formFieldLimits.masks.telefone;

  // placeholders
  emailPlaceholder: string = formFieldLimits.placeholders.email;
  telefonePlaceholder: string = formFieldLimits.placeholders.telefone;

  contatoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): void {
    this.contatoForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(this.curtoMaxLength)])],
      telefones: this.formBuilder.array([])
    });
    this.adicionaTelefone();
  }

  get telefones(): FormArray {
    return this.contatoForm.get("telefones") as FormArray;
  }

  adicionaTelefone(): void {
    if(this.telefones) {
      this.telefones.push(
        this.formBuilder.group({
          telefone: ['', Validators.compose([Validators.required, Validators.maxLength(this.telefoneLength)])]
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
}
