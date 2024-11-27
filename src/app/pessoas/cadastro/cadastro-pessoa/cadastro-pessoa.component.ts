import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PessoasService } from '../../pessoas.service';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: false,
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent {
  etapas: MenuItem[] = [
    {
      label: 'Dados cadastrais',
      routerLink: 'dados-cadastrais'
    },
    {
        label: 'Dados de contato',
        routerLink: 'dados-contato'
    },
    {
        label: 'Dados de endereço',
        routerLink: 'dados-endereco'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private pessoasService: PessoasService
  ) {
    this.checkRouteId();
  }

  checkRouteId() {
    this.route.paramMap.subscribe(params => {
      if(!!params.get("id")) {
        this.pessoasService.carregaPessoa(params.get("id"));
      }
    })
  }
}
