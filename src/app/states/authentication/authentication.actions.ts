import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Log in', props<{ email: string }>());
export const logout = createAction('[Auth] Log out');