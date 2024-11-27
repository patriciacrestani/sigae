import { Component, ViewChild } from '@angular/core';
import { IPessoa } from '../../models/pessoa';
import { PessoasService } from '../pessoas.service';
import { ModalExcluirPessoaComponent } from '../modal-excluir-pessoa/modal-excluir-pessoa.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-pessoas',
  standalone: false,
  templateUrl: './listagem-pessoas.component.html',
  styleUrl: './listagem-pessoas.component.css'
})
export class ListagemPessoasComponent {
  @ViewChild("modalExcluirPessoa") modalExcluirPessoa: ModalExcluirPessoaComponent;

  pessoas: IPessoa[];
  
  constructor( 
    private pessoasService: PessoasService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.getPessoas();
  }

  possuiPessoas(): boolean {
    return (!!this.pessoas && this.pessoas.length > 0);
  }

  getPessoas() {
    this.pessoas = this.pessoasService.getPessoas();
  }

  editarPessoa(pessoa) {
    this.router.navigate([pessoa.id], { relativeTo: this.route });
  }

  confirmaExclusao(pessoa) {
    this.modalExcluirPessoa.exibeConfirmacaoExclusao(pessoa.id, pessoa.nome);
  }

  excluirPessoa(idPessoa) {
    this.pessoasService.excluirPessoa(idPessoa);
    this.getPessoas();
  }
}
