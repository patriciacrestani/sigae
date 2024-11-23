import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-listagem-pessoas',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule],
  templateUrl: './listagem-pessoas.component.html',
  styleUrl: './listagem-pessoas.component.css'
})
export class ListagemPessoasComponent {
  pessoas: Pessoa[] = [
    {
      id: 1,
      nome: "Patricia",
      nomeSocial: "Patricia",
      cpf: "173.152.497-88",
      cnpj: "XXXXXXXXX",
      contato: {
        id: 1,
        email: "patriciamrc",
        telefones: []
      },
      escola: {
        id: 1,
        nome: "Escola"
      },
      endereco: {
        cidade: "Rio de Janeiro",
        cep: "22230060",
        estado: "RJ",
        pais: "Brazil",
        logradouro: "Rua X 12"
      }
    }
  ];
  

  editarPessoa() {

  }

  excluirPessoa() {
    
  }
}
