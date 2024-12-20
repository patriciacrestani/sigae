import { ClasseGenerica } from "../models/classe-generica";

export class EtapaPlanoAcaoEnum {
    public static Pendente: number = 1;
    public static EmAndamento: number = 2;
    public static Concluido: number = 3;

    public static getDescricoesEtapaPlanoAcao() {
        return ({
            1: "Pendente",
            2: "Em andamento",
            3: "Concluído"
        });
    }

    public static getDescricaoEtapaById(id: number) {
        return this.getDescricoesEtapaPlanoAcao()[id];
    }

    public static getEtapa(): ClasseGenerica[] {
        return ClasseGenerica.mapList<ClasseGenerica>([
            {
                id: 1,
                descricao: "Pendente"
            },
            {
                id: 2,
                descricao: "Em andamento"
            },
            {
                id: 3,
                descricao: "Concluído"
            }
        ])
        ;
    }
}