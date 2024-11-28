import { formFieldLimits } from "../../config/formConfig";

export const eventoFormConfig = { ...formFieldLimits,
    labels: {
        titulo: "Título",
        descricao: "Descrição",
        participantes: "Participantes",
        data: "Data",
        horario: "Horário",
        planoAcao: "Plano de ação"
    },
    placeholders: {
        titulo: "Digite o título",
        descricao: "Digite a descrição",
        participantes: "Informe os participantes",
        data: "DD/MM/AAAA",
        horario: "00:00",
        planoAcao: "Escolha o plano de ação"
    }
};