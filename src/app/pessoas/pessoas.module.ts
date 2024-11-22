import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasRoutingModule } from './pessoas.routes';
import { CadastroPessoaComponent } from './cadastro/cadastro-pessoa/cadastro-pessoa.component';
import { DadosCadastraisPessoaComponent } from './cadastro/dados-cadastrais-pessoa/dados-cadastrais-pessoa.component';
import { DadosContatoPessoaComponent } from './cadastro/dados-contato-pessoa/dados-contato-pessoa.component';
import { DadosEnderecoPessoaComponent } from './cadastro/dados-endereco-pessoa/dados-endereco-pessoa.component';



@NgModule({
  declarations: [
    CadastroPessoaComponent,
    DadosCadastraisPessoaComponent,
    DadosContatoPessoaComponent,
    DadosEnderecoPessoaComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule
  ]
})
export class PessoasModule { }
