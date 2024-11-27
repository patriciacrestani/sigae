import { formFieldLimits } from "../../../config/formConfig";

export const dadosContatoFormConfig = { ...formFieldLimits,
    masks: {
        telefone: "(99) 9999-9999",
    },
    lengths: {
        telefone: 14,
    },
    labels: {
        telefone: "Telefone",
        email: "E-mail",
    },
    placeholders: {
        telefone: "(99) 9999-9999",
        email: "email@exemplo.com",
    }
};