import { createAction, props } from '@ngrx/store';
import { IPlano } from '../../models/plano-acao';

export const addPlano = createAction('[Plano] Add Plano', props<{ plano: IPlano }>());
export const updatePlano = createAction('[Plano] Update Plano', props<{ plano: IPlano }>());
export const deletePlano = createAction('[Plano] Delete Plano', props<{ id: number }>());