import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Pessoa } from '../models/pessoa';
import { PessoasState } from '../states/pessoa/pessoa.reducer';
import { Store } from '@ngrx/store';
import { addPessoa, deletePessoa, updatePessoa } from '../states/pessoa/pessoa.actions';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  static readonly NovaPessoaKey: string = "NOVA_PESSOA_KEY";

  constructor(
    private store: Store<PessoasState>,
    private localStorageService: LocalStorageService
  ) { }

  getPessoas() {
    let pessoas = [];
    this.store.select('pessoas').subscribe(response => { 
      pessoas = response["pessoas"];
    });
    return pessoas;
  }

  getPessoaById(id) {
    let pessoas = [];
    this.store.select('pessoas').subscribe(response => { 
      pessoas = response["pessoas"];
    });
    return pessoas.find(p => p.id == id);
  }

  carregaPessoa(id) {
    this.removePessoa();
    let pessoa = this.getPessoaById(id);
    this.salvaPessoa(pessoa);
  }

  getNextId(): number {
    let pessoas = this.getPessoas();
    if(pessoas.length > 0) {
      return pessoas[pessoas.length - 1].id + 1;
    }
    return 1;
  }

  getPessoa() {
    return this.localStorageService.getItem(PessoasService.NovaPessoaKey);
  }

  getPessoaAtualizada(pessoa): Pessoa {
    let pessoaAtualizada = new Pessoa();
    if(!!this.getPessoa()) {
      pessoaAtualizada.preenchePropriedades(this.getPessoa());
    }
    pessoaAtualizada.preenchePropriedades(pessoa);
    return pessoaAtualizada;
  }

  salvaPessoa(pessoa) {
    let pessoaAtualizada = this.getPessoaAtualizada(pessoa);
    this.localStorageService.setItem(PessoasService.NovaPessoaKey, pessoaAtualizada);
  }

  salvaPessoaState(pessoa) {
    let pessoaAtualizada = this.getPessoaAtualizada(pessoa);
    
    if(pessoaAtualizada.id) {
      this.editaPessoa(pessoaAtualizada);
    } else {
      pessoaAtualizada.setId(this.getNextId());
      this.cadastraPessoa(pessoaAtualizada);
    }

    this.removePessoa();
  }

  editaPessoa(novaPessoa) {
    this.store.dispatch(updatePessoa({ pessoa: novaPessoa }));
  }

  cadastraPessoa(novaPessoa) {
    this.store.dispatch(addPessoa({ pessoa: novaPessoa }));
  }
  
  excluirPessoa(idPessoa) {
    this.store.dispatch(deletePessoa({ id: idPessoa }));
  }

  removePessoa() {
    this.localStorageService.removeItem(PessoasService.NovaPessoaKey);
  }
}
