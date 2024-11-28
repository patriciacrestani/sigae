import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [ 
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'agenda', 
        component: AgendaComponent ,
        canActivate: [AuthGuard]
    },
    { 
        path: 'pessoas', 
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule)
    },
    { 
        path: 'plano-acao',
        canActivateChild: [AuthGuard], 
        loadChildren: () => import('./plano-acao/plano-acao.module').then(m => m.PlanoAcaoModule)
    },
];
