import { BaseEntity } from "./base-entity";
  
export interface IEscola {
    id: number;
    nome: string;
}

export class Escola extends BaseEntity implements IEscola {
    nome: string;
}