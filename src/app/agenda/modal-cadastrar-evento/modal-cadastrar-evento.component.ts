import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { eventoFormConfig } from './evento-form-config';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { Pessoa } from '../../models/pessoa';
import { PessoasService } from '../../pessoas/pessoas.service';
import { DropdownModule } from 'primeng/dropdown';
import { Plano } from '../../models/plano-acao';

@Component({
  selector: 'app-modal-cadastrar-evento',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, FloatLabelModule, DialogModule, InputTextareaModule, ButtonModule, CalendarModule, MultiSelectModule, DropdownModule],
  templateUrl: './modal-cadastrar-evento.component.html',
  styleUrl: './modal-cadastrar-evento.component.css'
})
export class ModalCadastrarEventoComponent {
  eventoForm: FormGroup;
  eventoFormConfig = eventoFormConfig;
  visible: boolean = false;
  pessoas: Pessoa[];
  planosAcao: Plano[];

  constructor(
    private formBuilder: FormBuilder,
    private pessoasService: PessoasService
  ) {
    this.createForm();
    this.getPessoas();
  }

  getPessoas() {
    this.pessoas = this.pessoasService.getPessoas();
  }

  createForm() {
    this.eventoForm = this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.compose([Validators.required, Validators.maxLength(this.eventoFormConfig.maxLengths.padrao)])],
      descricao: ['',Validators.maxLength(this.eventoFormConfig.maxLengths.longo)],
      participantes: [''],
      data: ['', Validators.required],
      horario: ['', Validators.required],
      planoAcao: [''],
    });
  }
  
  controlaVisibilidade() {
    this.visible = !this.visible;
  }

  salvar() {
    
  }
}
