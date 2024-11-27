import { formFieldLimits } from "../../../config/formConfig";

export const planoFormConfig = { ...formFieldLimits,
    labels: {
        titulo: "Título",
        descricao: "Descrição",
        dataInicio: "Data de início",
        dataTermino: "Data de término",
        status: "Status",
    },
    placeholders: {
        titulo: "Digite o título",
        descricao: "Digite a descrição",
        dataInicio: "DD/MM/AAAA",
        dataTermino: "DD/MM/AAAA",
        status: "Selecione o status",
    }
};