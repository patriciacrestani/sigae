import { ESCOLAS } from "../mocks/escolas-mock";
import { BaseEntity } from "./base-entity";
import { Contato, IContato } from "./contato";
import { Endereco, IEndereco } from "./endereco";
import { Escola, IEscola } from "./escola";

export interface IPessoa {
    id: number;
    nome: string;
    nomeSocial: string;
    cpf: string;
    cnpj: string;
    contato: IContato;
    escola: IEscola;
    endereco: IEndereco;
}
  
export class Pessoa extends BaseEntity implements IPessoa {
    nome: string;
    nomeSocial: string;
    cpf: string;
    cnpj: string;
    contato: Contato;
    escola: Escola;
    endereco: Endereco;

    override map(dados) {
        if(!dados) {
            return;
        }

        super.map(dados);
        
        // this.cpf = dados["cpf"].replace(/\D/g, '');
        // this.cnpj = dados["cnpj"].replace(/\D/g, '');

        this.escola = new Escola(); 
        switch(typeof(dados["escola"])) {
            case "object":
                this.escola.map(dados["escola"]);
                break;
            default:
                this.escola.id = dados["escola"];
                let escolaBusca = ESCOLAS.find(e => e.id == dados["escola"]);
                if(!!escolaBusca) {
                    this.escola.nome = escolaBusca.nome;
                }
                break;
        }

        if(!!dados["contato"]) {
            this.contato = new Contato(); 
            this.contato.map(dados["contato"]);
        }

        if(!!dados["endereco"]) {
            this.endereco = new Endereco(); 
            this.endereco.map(dados["endereco"]);
        }
    }

    mapContato(dadosContato) {
        if(!!dadosContato) {
            this.contato = new Contato(); 
            this.contato.map(dadosContato);
        }
    }

    mapEndereco(dadosEndereco) {
        if(!!dadosEndereco) {
            this.endereco = new Endereco(); 
            this.endereco.map(dadosEndereco);
        }
    }
}