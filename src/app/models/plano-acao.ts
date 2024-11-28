import { BaseEntity } from "./base-entity";
import { ClasseGenerica } from "./classe-generica";
import { Objetivo } from "./objetivo";

export interface IPlano {
    id: number;
    titulo: string;
    descricao: string;
    dataInicio: string;
    dataTermino: string;
    status: ClasseGenerica;
    objetivos: Objetivo[];
}
export class Plano extends BaseEntity implements IPlano {
    titulo: string;
    descricao: string;
    dataInicio: string;
    dataTermino: string;
    status: ClasseGenerica;
    objetivos: Objetivo[];

    
    mapObjetivos(objetivos) {
        if(!!objetivos) {
            this.objetivos = Objetivo.mapList<Objetivo>(objetivos);
        }
    }
}