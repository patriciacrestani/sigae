import { createSelector } from '@ngrx/store';
import { PlanosState } from './plano-acao.reducer';

export const selectPlanos = (state: PlanosState) => state.planos;

export const selectPlanoById = (id: number) => createSelector(selectPlanos, planos => planos.find(plano => plano.id === id));