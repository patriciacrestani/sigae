import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoAcaoRoutingModule } from './plano-acao.routes';
import { CadastroAcoesPlanoAcaoComponent } from './cadastro-acoes-plano-acao/cadastro-acoes-plano-acao.component';
import { CadastroObjetivosPlanoAcaoComponent } from './cadastro-objetivos-plano-acao/cadastro-objetivos-plano-acao.component';
import { CadastroPlanoAcaoComponent } from './cadastro-plano-acao/cadastro-plano-acao.component';
import { CadastroPlanoPlanoAcaoComponent } from './cadastro-plano-plano-acao/cadastro-plano-plano-acao.component';



@NgModule({
  declarations: [
    CadastroPlanoAcaoComponent,
    CadastroPlanoPlanoAcaoComponent,
    CadastroObjetivosPlanoAcaoComponent,
    CadastroAcoesPlanoAcaoComponent
  ],
  imports: [
    CommonModule,
    PlanoAcaoRoutingModule
  ]
})
export class PlanoAcaoModule { }
