import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cadastro-plano-acao',
  standalone: false,
  templateUrl: './cadastro-plano-acao.component.html',
  styleUrl: './cadastro-plano-acao.component.css'
})
export class CadastroPlanoAcaoComponent {
  etapas: MenuItem[] = [
    {
      label: 'Plano',
      routerLink: 'plano'
    },
    {
        label: 'Objetivos',
        routerLink: 'objetivos'
    },
    {
        label: 'Ações',
        routerLink: 'acoes'
    },
  ];
}
