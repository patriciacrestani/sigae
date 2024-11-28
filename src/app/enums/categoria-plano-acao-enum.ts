import { ClasseGenerica } from "../models/classe-generica";

export class CategoriaPlanoAcaoEnum {
    public static Saude: number = 1;
    public static Financeiro: number = 2;
    public static Profissional: number = 3;

    public static getDescricoesCategoriaPlanoAcao() {
        return ({
            1: "Saúde",
            2: "Financeiro",
            3: "Profissional"
        });
    }

    public static getDescricaoCategoriaById(id: number) {
        return this.getDescricoesCategoriaPlanoAcao()[id];
    }

    public static getCategoria(): ClasseGenerica[] {
        return ClasseGenerica.mapList<ClasseGenerica>([
            {
                id: 1,
                descricao: "Saúde"
            },
            {
                id: 2,
                descricao: "Financeiro"
            },
            {
                id: 3,
                descricao: "Profissional"
            }
        ])
        ;
    }
}