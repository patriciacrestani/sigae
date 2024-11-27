import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { objetivoFormConfig } from './objetivos-plano-acao-form-config';

@Component({
  selector: 'app-objetivos-plano-acao',
  standalone: false,
  templateUrl: './objetivos-plano-acao.component.html',
  styleUrl: './objetivos-plano-acao.component.css'
})
export class ObjetivosPlanoAcaoComponent {
  objetivoFormArray: FormArray;
  objetivoFormConfig = objetivoFormConfig;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  createForm() {
    this.objetivoFormArray = this.formBuilder.array([]);
    this.adicionaObjetivo();
  }

  adicionaObjetivo() {
    this.objetivoFormArray.push(
      this.formBuilder.group({
        titulo: ["", Validators.required],
        descricao:["",],
        resultado: ["",],
        etapa: ["", Validators.required],
        possuiCausa: ["", Validators.required],
        prioridade: ["", Validators.required],
        categoria: ["",  Validators.required]
      })
    );
  }

  removeObjetivo(index: number) {
    if(!this.objetivoFormArray || this.objetivoFormArray.length <= 0) {
      return;
    }

    this.objetivoFormArray.removeAt(index);
  }

}
