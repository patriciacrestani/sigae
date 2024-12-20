import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.checkAuthentication()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}