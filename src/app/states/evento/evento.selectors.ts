import { createSelector } from '@ngrx/store';
import { EventoState } from './evento.reducer';

export const selectEventos = (state: EventoState) => state.eventos;

export const selectEventoById = (id: number) => createSelector(selectEventos, eventos => eventos.find(evento => evento.id === id));