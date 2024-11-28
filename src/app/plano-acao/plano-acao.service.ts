import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlanosState } from '../states/plano-acao/plano-acao.reducer';
import { LocalStorageService } from '../services/local-storage.service';
import { Plano } from '../models/plano-acao';
import { addPlano, deletePlano, updatePlano } from '../states/plano-acao/plano-acao.actions';

@Injectable({
  providedIn: 'root'
})
export class PlanoAcaoService {
  static readonly NovoPlanoKey: string = "NOVO_PLANO_KEY";

  constructor(
    private store: Store<PlanosState>,
    private localStorageService: LocalStorageService
  ) { }

  getPlanos() {
    let planos = [];
    this.store.select('planos').subscribe(response => { 
      planos = response["planos"];
    });
    return planos;
  }

  getPlanoById(id) {
    let planos = [];
    this.store.select('planos').subscribe(response => { 
      planos = response["planos"];
    });
    return planos.find(p => p.id == id);
  }

  carregaPlano(id) {
    this.removePlano();
    let plano = this.getPlanoById(id);
    this.salvaPlano(plano);
  }

  getNextId(): number {
    let planos = this.getPlanos();
    if(planos.length > 0) {
      return planos[planos.length - 1].id + 1;
    }
    return 1;
  }

  getPlano() {
    return this.localStorageService.getItem(PlanoAcaoService.NovoPlanoKey);
  }

  getPlanoAtualizada(plano): Plano {
    let planoAtualizada = new Plano();
    if(!!this.getPlano()) {
      planoAtualizada.preenchePropriedades(this.getPlano());
    }
    planoAtualizada.preenchePropriedades(plano);
    return planoAtualizada;
  }

  salvaPlano(plano) {
    let planoAtualizada = this.getPlanoAtualizada(plano);
    this.localStorageService.setItem(PlanoAcaoService.NovoPlanoKey, planoAtualizada);
  }

  salvaPlanoState(plano) {
    let planoAtualizada = this.getPlanoAtualizada(plano);
    
    if(planoAtualizada.id) {
      this.editaPlano(planoAtualizada);
    } else {
      planoAtualizada.setId(this.getNextId());
      this.cadastraPlano(planoAtualizada);
    }

    this.removePlano();
  }

  editaPlano(novoPlano) {
    this.store.dispatch(updatePlano({ plano: novoPlano }));
  }

  cadastraPlano(novoPlano) {
    this.store.dispatch(addPlano({ plano: novoPlano }));
  }
  
  excluirPlano(idPlano) {
    this.store.dispatch(deletePlano({ id: idPlano }));
  }

  removePlano() {
    this.localStorageService.removeItem(PlanoAcaoService.NovoPlanoKey);
  }
}