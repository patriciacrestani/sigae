import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthenticationService } from './authentication.service';
import { loginFormConfig } from './login-form-config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, FloatLabelModule, DialogModule, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  visible: boolean = true;
  public closed = output<void>();
  loginFormConfig = loginFormConfig;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
   }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.maxLength(loginFormConfig.lengths.senha)])]
    });
  }

  login() {
    this.authenticationService.login(this.loginForm.getRawValue()["email"]);
    console.log(this.authenticationService.isAuthenticated());
  }
}
