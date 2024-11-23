import { Contato } from "./contato";
import { Endereco } from "./endereco";
import { Escola } from "./escola";

export class Pessoa {
    id: number;
    nome: string;
    nomeSocial: string;
    cpf: string;
    cnpj: string;
    contato: Contato;
    escola: Escola;
    endereco: Endereco;
}