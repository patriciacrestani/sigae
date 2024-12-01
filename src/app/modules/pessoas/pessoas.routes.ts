import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoaComponent } from './cadastro/cadastro-pessoa/cadastro-pessoa.component';
import { DadosCadastraisPessoaComponent } from './cadastro/dados-cadastrais-pessoa/dados-cadastrais-pessoa.component';
import { DadosContatoPessoaComponent } from './cadastro/dados-contato-pessoa/dados-contato-pessoa.component';
import { DadosEnderecoPessoaComponent } from './cadastro/dados-endereco-pessoa/dados-endereco-pessoa.component';
import { AuthGuard } from '../../services/auth-guard.service';

export const routes: Routes = [ 
    { 
        path: '', 
        component: ListagemPessoasComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'cadastro', 
        component: CadastroPessoaComponent,
        children: [
            { 
                path: '', 
                pathMatch: 'full',
                redirectTo: 'dados-cadastrais'
            },
            { 
                path: 'dados-cadastrais', 
                component: DadosCadastraisPessoaComponent,
                canActivate: [AuthGuard]
            },
            { 
                path: 'dados-contato', 
                component: DadosContatoPessoaComponent,
                canActivate: [AuthGuard] 
            },
            { 
                path: 'dados-endereco', 
                component: DadosEnderecoPessoaComponent,
                canActivate: [AuthGuard] 
            },
        ] 
    },
    { 
        path: ':id', 
        component: CadastroPessoaComponent,
        children: [
            { 
                path: '', 
                pathMatch: 'full',
                redirectTo: 'dados-cadastrais'
            },
            { 
                path: 'dados-cadastrais', 
                component: DadosCadastraisPessoaComponent,
                canActivate: [AuthGuard] 
            },
            { 
                path: 'dados-contato', 
                component: DadosContatoPessoaComponent,
                canActivate: [AuthGuard] 
            },
            { 
                path: 'dados-endereco', 
                component: DadosEnderecoPessoaComponent,
                canActivate: [AuthGuard] 
            },
        ] 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PessoasRoutingModule { }