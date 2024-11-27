import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { problemaFormConfig } from './problema-form-config';
import { ClasseGenerica } from '../../../models/classe-generica';
import { Problema } from '../../../models/problema';

interface Column {
  field: string;
  header: string;
  action: boolean;
}

@Component({
  selector: 'app-problema-plano-acao',
  standalone: false,
  templateUrl: './problema-plano-acao.component.html',
  styleUrl: './problema-plano-acao.component.css'
})
export class ProblemaPlanoAcaoComponent {
  problemaForm: FormGroup;
  etapas: ClasseGenerica[];
  prioridades: ClasseGenerica[];
  categorias: ClasseGenerica[];
  problemas: Problema[];
  problemaFormConfig = problemaFormConfig;
  
  columns: Column[] = [
    { field: 'titulo', header: this.problemaFormConfig.labels.titulo, action: false },
    { field: 'etapa.descricao', header: this.problemaFormConfig.labels.etapa, action: false },
    { field: 'possuiCausa', header: this.problemaFormConfig.labels.possuiCausa, action: false },
    { field: 'resultado', header: this.problemaFormConfig.labels.resultado, action: false },
    { field: 'prioridade.descricao', header: this.problemaFormConfig.labels.prioridade, action: false },
    { field: 'categoria.descricao', header: this.problemaFormConfig.labels.categoria, action: false },
    { field: '', header: "", action: true },
];

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  createForm() {
    this.problemaForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      descricao:["",],
      resultado: ["",],
      etapa: ["", Validators.required],
      possuiCausa: ["", Validators.required],
      prioridade: ["", Validators.required],
      categoria: ["",  Validators.required]
    });
  }

  removeProblema(problema: Problema) {
    if(!problema || !this.problemas || this.problemas.length <= 0) {
      return;
    }
    let indexProblema = this.problemas.findIndex(p => p.id == problema.id);
    if(indexProblema != -1) {
      this.problemas.splice(indexProblema, 1);
    }
  }

  habilitaCadastroProblema(): boolean {
    return this.problemaForm.valid;
  }

  adicionaProblema() {
    if(!this.habilitaCadastroProblema()) {
      return;
    }
    this.problemas.push(new Problema(this.problemaForm.getRawValue()));
  }

  possuiProblemas(): boolean {
    return (!!this.problemas && this.problemas.length > 0);
  }
}