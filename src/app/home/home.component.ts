import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AuthenticationService } from '../login/authentication.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PlanoAcaoService } from '../plano-acao/plano-acao.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  qtdPessoas: number = 0;
  qtdPlanoAcao: number = 0;

  constructor(
    private authenticationService: AuthenticationService,
    private pessoasService: PessoasService,
    private planoAcaoService: PlanoAcaoService
  ) { 
    this.getQtdPessoas();
    this.getQtdPlanos();
  }
  
  getQtdPessoas() {
    this.qtdPessoas = this.pessoasService.getPessoas().length;
  }

  getQtdPlanos() {
    this.qtdPlanoAcao = this.planoAcaoService.getPlanos().length;
  }

  checkAuthentication(): boolean {
    return this.authenticationService.checkAuthentication();
  }

}
