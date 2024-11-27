import { createReducer, createSelector, on } from "@ngrx/store";
import { login, logout } from "./authentication.actions";

export interface AuthState{
    email: String,
    isAuthenticated: boolean;
}
    
export const initialAuthState: AuthState={
    email:"",
    isAuthenticated: false,
}

export const getAuthReducer = createReducer(
  initialAuthState,
  
  on(login, (state, {email: email}) => {
    return ({...state, email, isAuthenticated: true})}),
  
  on(logout, (state) => initialAuthState),
);

export const selectAuth = (state: AuthState) => state.isAuthenticated;
