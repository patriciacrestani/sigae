import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PessoasService } from '../../pessoas/pessoas.service';
import { PlanoAcaoService } from '../../plano-acao/plano-acao.service';
import { AuthenticationService } from '../login/authentication.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  qtdPessoas: string = "0";
  qtdPlanoAcao: string = "0";

  constructor(
    private authenticationService: AuthenticationService,
    private pessoasService: PessoasService,
    private planoAcaoService: PlanoAcaoService
  ) { 
    this.getQtdPessoas();
    this.getQtdPlanos();
  }
  
  getQtdPessoas() {
    this.qtdPessoas = this.pessoasService.getPessoas().length.toString();
  }

  getQtdPlanos() {
    this.qtdPlanoAcao = this.planoAcaoService.getPlanos().length.toString();
  }

  checkAuthentication(): boolean {
    return this.authenticationService.checkAuthentication();
  }

}
