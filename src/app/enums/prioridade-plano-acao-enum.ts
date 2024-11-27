import { ClasseGenerica } from "../models/classe-generica";

export class PrioridadePlanoAcaoEnum {
    public static Baixa: number = 1;
    public static Media: number = 2;
    public static Alta: number = 3;

    public static getDescricoesPrioridadePlanoAcao() {
        return ({
            1: "Baixa",
            2: "Média",
            3: "Alta"
        });
    }

    public static getDescricaoPrioridadeById(id: number) {
        return this.getDescricoesPrioridadePlanoAcao()[id];
    }

    public static getPrioridades(): ClasseGenerica[] {
        return ClasseGenerica.mapList<ClasseGenerica>([
            {
                id: 1,
                descricao: "Baixa"
            },
            {
                id: 2,
                descricao: "Média"
            },
            {
                id: 3,
                descricao: "Alta"
            }
        ]);
    }
}