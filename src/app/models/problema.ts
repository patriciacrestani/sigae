import { BaseEntity } from "./base-entity";
import { ClasseGenerica } from "./classe-generica";

export class Problema extends BaseEntity {
    titulo: string;
    descricao: string;
    resultado: string;
    etapa: ClasseGenerica;
    possuiCausa: boolean;
    prioridade: ClasseGenerica;
    categoria: ClasseGenerica;

    constructor(problema) {
        super();
        this.id = problema.id;
        this.titulo = problema.titulo;
        this.descricao = problema.descricao;
        this.resultado = problema.resultado;
        this.etapa = new ClasseGenerica(problema.etapa);
        this.etapa.mapeiaEtapa(problema.etapa);
        this.possuiCausa = problema.possuiCausa;
        this.prioridade = new ClasseGenerica();
        this.prioridade.mapeiaPrioridade(problema.prioridade);
        this.categoria = new ClasseGenerica();
        this.categoria.mapeiaCategoria(problema.categoria);
    }
}