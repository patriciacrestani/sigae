import { BaseEntity } from "./base-entity";
import { Problema } from "./problema";

export class Objetivo extends BaseEntity {
    titulo: string;
    problemas: Problema[];

    override map(dados) {
        if(!dados) {
            return;
        }

        super.map(dados);

        if(!!dados["problemas"] && dados["problemas"].length > 0) {
            this.problemas = Problema.mapList<Problema>(dados["problemas"]);
        }
    }
}