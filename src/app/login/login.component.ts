import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

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
  public closed = output<void>()

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
   }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      senha: ['']
    });
  }

  login() {
    
  }
}
