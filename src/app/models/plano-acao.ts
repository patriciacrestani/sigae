import { BaseEntity } from "./base-entity";
import { ClasseGenerica } from "./classe-generica";

export class Plano extends BaseEntity {
    titulo: string;
    descricao: string;
    dataInicio: string;
    dataTermino: string;
    status: ClasseGenerica;
}