import { formFieldLimits } from "../../../config/formConfig";

export const loginFormConfig = { ...formFieldLimits,
    lengths: {
        senha: 6
    },
    labels: {
        email: "E-mail",
        senha: "Senha"
    },
    placeholders: {
        email: "email@exemplo.com",
        senha: "******",
    }
};