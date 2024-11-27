import { createAction, props } from '@ngrx/store';
import { IPessoa } from '../../models/pessoa';

export const addPessoa = createAction('[Pessoa] Add Pessoa', props<{ pessoa: IPessoa }>());
export const updatePessoa = createAction('[Pessoa] Update Pessoa', props<{ pessoa: IPessoa }>());
export const deletePessoa = createAction('[Pessoa] Delete Pessoa', props<{ id: number }>());