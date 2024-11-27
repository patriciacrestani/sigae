import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoAcaoRoutingModule } from './plano-acao.routes';
import { StepsModule } from 'primeng/steps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CadastroPlanoAcaoComponent } from './cadastro/cadastro-plano-acao/cadastro-plano-acao.component';
import { AcoesPlanoAcaoComponent } from './cadastro/acoes-plano-acao/acoes-plano-acao.component';
import { ObjetivosPlanoAcaoComponent } from './cadastro/objetivos-plano-acao/objetivos-plano-acao.component';
import { PlanoAcaoComponent } from './cadastro/plano-acao/plano-acao.component';
import { ProblemaPlanoAcaoComponent } from './cadastro/problema-plano-acao/problema-plano-acao.component';

@NgModule({
  declarations: [
    AcoesPlanoAcaoComponent,
    CadastroPlanoAcaoComponent,
    ObjetivosPlanoAcaoComponent,
    PlanoAcaoComponent,
    ProblemaPlanoAcaoComponent
  ],
  imports: [
    CommonModule,
    PlanoAcaoRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    CalendarModule,
    DropdownModule,
    StepsModule,
    TableModule
  ]
})
export class PlanoAcaoModule { }
