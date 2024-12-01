import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { AgendaComponent } from './modules/agenda/agenda/agenda.component';
import { AcessoNegadoComponent } from './modules/core/acesso-negado/acesso-negado.component';
import { HomeComponent } from './modules/core/home/home.component';

export const routes: Routes = [ 
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'acesso-negado', 
        component: AcessoNegadoComponent 
    },
    { 
        path: 'agenda', 
        component: AgendaComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'pessoas', 
        loadChildren: () => import('./modules/pessoas/pessoas.module').then(m => m.PessoasModule)
    },
    { 
        path: 'plano-acao',
        loadChildren: () => import('./modules/plano-acao/plano-acao.module').then(m => m.PlanoAcaoModule)
    },
];
