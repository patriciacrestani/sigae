import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AgendaComponent } from './agenda/agenda.component';

export const routes: Routes = [ 
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'agenda', 
        component: AgendaComponent 
    },
    { 
        path: 'pessoas', 
        loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule)
    },
    { 
        path: 'plano-acao', 
        loadChildren: () => import('./plano-acao/plano-acao.module').then(m => m.PlanoAcaoModule)
    },
];
