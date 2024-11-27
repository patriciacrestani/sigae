import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasRoutingModule } from './pessoas.routes';
import { CadastroPessoaComponent } from './cadastro/cadastro-pessoa/cadastro-pessoa.component';
import { DadosCadastraisPessoaComponent } from './cadastro/dados-cadastrais-pessoa/dados-cadastrais-pessoa.component';
import { DadosContatoPessoaComponent } from './cadastro/dados-contato-pessoa/dados-contato-pessoa.component';
import { DadosEnderecoPessoaComponent } from './cadastro/dados-endereco-pessoa/dados-endereco-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import { ModalExcluirPessoaComponent } from './modal-excluir-pessoa/modal-excluir-pessoa.component';

@NgModule({
  declarations: [
    CadastroPessoaComponent,
    DadosCadastraisPessoaComponent,
    DadosContatoPessoaComponent,
    DadosEnderecoPessoaComponent,
    ListagemPessoasComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    FloatLabelModule,
    TableModule,
    DropdownModule,
    InputMaskModule,
    StepsModule,
    ModalExcluirPessoaComponent
  ]
})
export class PessoasModule { }
