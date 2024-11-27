import { CategoriaPlanoAcaoEnum } from "../enums/categoria-plano-acao-enum";
import { EtapaPlanoAcaoEnum } from "../enums/etapa-plano-acao-enum";
import { PrioridadePlanoAcaoEnum } from "../enums/prioridade-plano-acao-enum";
import { BaseEntity } from "./base-entity";

export class ClasseGenerica extends BaseEntity {
    descricao: string;

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
}