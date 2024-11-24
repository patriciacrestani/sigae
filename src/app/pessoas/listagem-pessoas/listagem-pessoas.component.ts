import { Component } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { PESSOAS } from '../../mocks/pessoas-mock';

@Component({
  selector: 'app-listagem-pessoas',
  standalone: false,
  templateUrl: './listagem-pessoas.component.html',
  styleUrl: './listagem-pessoas.component.css'
})
export class ListagemPessoasComponent {
  pessoas: Pessoa[] = PESSOAS;
  

  editarPessoa() {

  }

  excluirPessoa() {
    
  }
}
