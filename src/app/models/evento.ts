import { BaseEntity } from "./base-entity";
import { IPessoa, Pessoa } from "./pessoa";

export interface IEvento {
    id: number;
    titulo: string;
    descricao: string;
    participantes: IPessoa[];
    data: string;
    horario: string;
    planoAcao;
}

export class Evento extends BaseEntity implements IEvento {
    titulo: string;
    descricao: string;
    participantes: Pessoa[];
    data: string;
    horario: string;
    planoAcao;

}