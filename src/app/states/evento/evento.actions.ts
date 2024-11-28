import { createAction, props } from '@ngrx/store';
import { IEvento } from '../../models/evento';

export const addEvento = createAction('[Evento] Add Evento', props<{ evento: IEvento }>());
export const updateEvento = createAction('[Evento] Update Evento', props<{ evento: IEvento }>());
export const deleteEvento = createAction('[Evento] Delete Evento', props<{ id: number }>());