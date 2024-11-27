import { BaseEntity } from "./base-entity";
  
export interface IEndereco {
    id: number;
    cidade: string;
    cep: string;
    estado: string;
    pais: string;
    logradouro: string;
}

export class Endereco extends BaseEntity implements IEndereco {
    cidade: string;
    cep: string;
    estado: string;
    pais: string;
    logradouro: string;
}