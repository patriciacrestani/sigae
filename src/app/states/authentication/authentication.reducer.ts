import { login, logout } from "./authentication.actions";

export interface AuthState{
  email: string,
  authenticated: boolean;
}
    
export const initialAuthState: AuthState = {
  email: "",
  authenticated: true
}
  
export function authReducer(state = initialAuthState, action): AuthState {
  switch (action.type) {
    case login.type:
      return {...state, email: action.email, authenticated: true };
    case logout.type:
      return initialAuthState;
    default:
      return state;
  }
}
