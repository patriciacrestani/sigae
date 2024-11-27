import { createAction, props } from "@ngrx/store";

export enum ActionTypes{
    LOG_IN='[Login Page] Log in user',
    LOG_OUT='[Login Page] Log out user'
}

export const login = createAction(
  ActionTypes.LOG_IN,
  props<{email: String}>()
);

export const logout = createAction(
  ActionTypes.LOG_OUT
);
