import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoaComponent } from './cadastro/cadastro-pessoa/cadastro-pessoa.component';
import { DadosCadastraisPessoaComponent } from './cadastro/dados-cadastrais-pessoa/dados-cadastrais-pessoa.component';
import { DadosContatoPessoaComponent } from './cadastro/dados-contato-pessoa/dados-contato-pessoa.component';
import { DadosEnderecoPessoaComponent } from './cadastro/dados-endereco-pessoa/dados-endereco-pessoa.component';

export const routes: Routes = [ 
    { 
        path: '', 
        component: ListagemPessoasComponent
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
                component: DadosCadastraisPessoaComponent 
            },
            { 
                path: 'dados-contato', 
                component: DadosContatoPessoaComponent 
            },
            { 
                path: 'dados-endereco', 
                component: DadosEnderecoPessoaComponent 
            },
        ] 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PessoasRoutingModule { }