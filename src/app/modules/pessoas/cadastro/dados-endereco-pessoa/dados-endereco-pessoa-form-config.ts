import { formFieldLimits } from "../../../../config/formConfig";

export const dadosEnderecoFormConfig = { ...formFieldLimits,
    masks: {
        cep: "999999-99"
    },
    lengths: {
        cep: 9
    },
    labels: {
        logradouro: "Logradouro",
        cidade: "Cidade",
        cep: "CEP",
        estado: "Estado",
        pais: "País",
    },
    placeholders: {
        logradouro: "Digite o logradouro",
        cidade: "Digite a cidade",
        cep: "999999-99",
        estado: "Digite o estado",
        pais: "Selecione o país",
    }
};