import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login, logout } from '../states/authentication/authentication.actions';
import { selectAuth } from '../states/authentication/authentication.reducer';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private store: Store){}
  
  login(email: String){
    this.store.dispatch(login({email: email}));
  }

  isAuthenticated(): boolean {
    let isAuthenticated: boolean;
    this.store.pipe(select(selectAuth),take(1)).subscribe((response) => {
      isAuthenticated = response;
    });
    console.log(isAuthenticated);
   return isAuthenticated;
  }

  logout(){
    this.store.dispatch(logout());
  }
}
