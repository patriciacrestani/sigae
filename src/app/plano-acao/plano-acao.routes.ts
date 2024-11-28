import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroPlanoAcaoComponent } from './cadastro/cadastro-plano-acao/cadastro-plano-acao.component';
import { PlanoAcaoComponent } from './cadastro/plano-acao/plano-acao.component';
import { ObjetivosPlanoAcaoComponent } from './cadastro/objetivos-plano-acao/objetivos-plano-acao.component';
import { AcoesPlanoAcaoComponent } from './cadastro/acoes-plano-acao/acoes-plano-acao.component';
import { AuthGuard } from '../services/auth-guard.service';

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
                component: PlanoAcaoComponent,
                canActivate: [AuthGuard]
            },
            { 
                path: 'objetivos', 
                component: ObjetivosPlanoAcaoComponent,
                canActivate: [AuthGuard]
            },
            { 
                path: 'acoes', 
                component: AcoesPlanoAcaoComponent,
                canActivate: [AuthGuard] 
            },
        ] 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanoAcaoRoutingModule { }