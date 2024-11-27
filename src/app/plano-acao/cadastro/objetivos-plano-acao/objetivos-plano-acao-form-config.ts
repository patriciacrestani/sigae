import { formFieldLimits } from "../../../config/formConfig";

export const objetivoFormConfig = { ...formFieldLimits,
    labels: {
        titulo: "Título do problema",
        descricao: "Descrição",
        resultado: "Resultado",
        etapa: "Etapa",
        possuiCausa: "Possui causa?",
        prioridade: "Prioridade",
        categoria: "Categoria",
    },
    placeholders: {
        titulo: "Digite o título",
        descricao: "Digite a descrição",
        resultado: "Digite o resultado",
        etapa: "Selecione a etapa",
        possuiCausa: "",
        prioridade: "Selecione a prioridade",
        categoria: "Selecione a categoria",
    }
};