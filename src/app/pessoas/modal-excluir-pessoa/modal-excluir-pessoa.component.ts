import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-modal-excluir-pessoa',
  standalone: true,
  imports: [CommonModule, InputTextModule, FloatLabelModule, DialogModule, PasswordModule, ButtonModule],
  templateUrl: './modal-excluir-pessoa.component.html',
  styleUrl: './modal-excluir-pessoa.component.css'
})
export class ModalExcluirPessoaComponent {
  @Output() excluirPessoa = new EventEmitter();

  visible: boolean = false;
  idPessoa;
  nomePessoa;
  
  constructor(private pessoasService: PessoasService) {}

  exibeConfirmacaoExclusao(idPessoa, nomePessoa) {
    this.idPessoa = idPessoa;
    this.nomePessoa = nomePessoa;
    this.controlaVisibilidade();
  }

  controlaVisibilidade() {
    this.visible = !this.visible;
  }

  excluir() {
    this.excluirPessoa.emit(this.idPessoa);
    this.controlaVisibilidade();
  }
}
