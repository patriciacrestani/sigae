import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventoState } from '../states/evento/evento.reducer';
import { addEvento, deleteEvento, updateEvento } from '../states/evento/evento.actions';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(
    private store: Store<EventoState>
  ) { }

  getEventos() {
    let eventos = [];
    this.store.select('eventos').subscribe(response => { 
      eventos = response["eventos"];
    });
    return eventos;
  }

  getEventoById(id) {
    let eventos = [];
    this.store.select('eventos').subscribe(response => { 
      eventos = response["eventos"];
    });
    return eventos.find(e => e.id == id);
  }

  getNextId(): number {
    let eventos = this.getEventos();
    if(eventos.length > 0) {
      return eventos[eventos.length - 1].id + 1;
    }
    return 1;
  }

  salvaEvento(evento) {
    if(evento.id) {
      this.editaEvento(evento);
    } else {
      evento.setId(this.getNextId());
      this.cadastraEvento(evento);
    }
  }

  editaEvento(novoEvento) {
    this.store.dispatch(updateEvento({ evento: novoEvento }));
  }

  cadastraEvento(novoEvento) {
    this.store.dispatch(addEvento({ evento: novoEvento }));
  }
  
  excluirEvento(idEvento) {
    this.store.dispatch(deleteEvento({ id: idEvento }));
  }
}