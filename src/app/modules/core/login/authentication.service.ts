import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../states/authentication/authentication.reducer';
import { login, logout } from '../../../states/authentication/authentication.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private store: Store<AuthState>){}
  
  login(emailLogin: string){
    this.store.dispatch(login({ email: emailLogin }));
  }

  checkAuthentication(): boolean {
    let checkAutentication: boolean;
    this.store.select('authenticated').subscribe((response) => {
      checkAutentication = response["authenticated"];
    });
   return checkAutentication;
  }

  logout(){
    this.store.dispatch(logout());
  }
}