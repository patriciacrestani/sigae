import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

class EtapasCadastroPessoaEnum {
  static DadosCadastrais: number = 0;
  static DadosContato: number = 1;
  static DadosEndereco: number = 2;
}

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: false,
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent {
  etapas: string[] = [
    "Dados cadastrais",
    "Dados de contato",
    "Dados de endereço"
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  proximaEtapa(novaEtapa: number) {
    switch(novaEtapa) {
      case EtapasCadastroPessoaEnum.DadosCadastrais:
        return this.router.navigate(['dados-cadastrais'], { relativeTo: this.route });
      case EtapasCadastroPessoaEnum.DadosContato:
        return this.router.navigate(['dados-contato'], { relativeTo: this.route });
      case EtapasCadastroPessoaEnum.DadosEndereco:
        return this.router.navigate(['dados-endereco'], { relativeTo: this.route });
      default:
        return;
    }
  }
}
