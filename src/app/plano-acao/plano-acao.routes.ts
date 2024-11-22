import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroPlanoAcaoComponent } from './cadastro-plano-acao/cadastro-plano-acao.component';
import { CadastroPlanoPlanoAcaoComponent } from './cadastro-plano-plano-acao/cadastro-plano-plano-acao.component';
import { CadastroObjetivosPlanoAcaoComponent } from './cadastro-objetivos-plano-acao/cadastro-objetivos-plano-acao.component';
import { CadastroAcoesPlanoAcaoComponent } from './cadastro-acoes-plano-acao/cadastro-acoes-plano-acao.component';

export const routes: Routes = [ 
    { 
        path: '', 
        redirectTo: 'cadastro',
        pathMatch: 'full',
    },
    { 
        path: 'cadastro', 
        component: CadastroPlanoAcaoComponent,
        children: [
            { 
                path: '', 
                redirectTo: 'plano',
                pathMatch: 'full',
            },
            { 
                path: 'plano', 
                component: CadastroPlanoPlanoAcaoComponent 
            },
            { 
                path: 'objetivos', 
                component: CadastroObjetivosPlanoAcaoComponent 
            },
            { 
                path: 'acoes', 
                component: CadastroAcoesPlanoAcaoComponent 
            },
        ] 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanoAcaoRoutingModule { }