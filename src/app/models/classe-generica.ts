import { CategoriaPlanoAcaoEnum } from "../enums/categoria-plano-acao-enum";
import { EtapaPlanoAcaoEnum } from "../enums/etapa-plano-acao-enum";
import { PrioridadePlanoAcaoEnum } from "../enums/prioridade-plano-acao-enum";
import { StatusPlanoAcaoEnum } from "../enums/status-plano-acao-enum";
import { BaseEntity } from "./base-entity";

export class ClasseGenerica extends BaseEntity {
    descricao: string;

    constructor(dados?) {
        if(!dados) {
            return;
        }
        super(dados);
        this.preenchePropriedades(dados);
    }

    override map(dados) {
        if(!dados) {
            return;
        }

        this.preenchePropriedades(dados);
    }

    static override mapList<ClasseGenerica>(dados: any[]): ClasseGenerica[] {
        if(!dados || !Array.isArray(dados) || dados.length <= 0) {
            return [new this() as ClasseGenerica];
        }

        return dados.map(dado => new this(dado) as ClasseGenerica);
    }

    mapeiaEtapa(dados) {
        if(!dados) {
            return;
        }

        switch(typeof(dados)) {
            case 'object':
                super.map(dados);
                break;
            default:
                this.id = dados;
                this.descricao = EtapaPlanoAcaoEnum.getDescricaoEtapaById(dados);
                break;
        }
    }

    mapeiaPrioridade(dados) {
        if(!dados) {
            return;
        }

        switch(typeof(dados)) {
            case 'object':
                super.map(dados);
                break;
            default:
                this.id = dados;
                this.descricao = PrioridadePlanoAcaoEnum.getDescricaoPrioridadeById(dados);
                break;
        }
    }

    mapeiaCategoria(dados) {
        if(!dados) {
            return;
        }

        switch(typeof(dados)) {
            case 'object':
                super.map(dados);
                break;
            default:
                this.id = dados;
                this.descricao = CategoriaPlanoAcaoEnum.getDescricaoCategoriaById(dados);
                break;
        }
    }

    mapeiaStatus(dados) {
        if(!dados) {
            return;
        }

        switch(typeof(dados)) {
            case 'object':
                super.map(dados);
                break;
            default:
                this.id = dados;
                this.descricao = StatusPlanoAcaoEnum.getDescricaoStatusById(dados);
                break;
        }
    }
}