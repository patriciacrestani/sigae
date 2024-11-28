import { formFieldLimits } from "../../../config/formConfig";

export const dadosCadastraisFormConfig = { ...formFieldLimits,
    masks: {
        cpf: "999.999.999-99",
        cnpj: "99.999.999/9999-99",
    },
    lengths: {
        cnpj: 18,
        cpf: 14,
    },
    labels: {
        nome: "Nome",
        nomeSocial: "Nome social",
        cpf: "CPF",
        cnpj: "CNPJ",
        escola: "Escola",
    },
    placeholders: {
        nome: "Digite o nome",
        nomeSocial: "Digite o nome social",
        cpf: "999.999.999-99",
        cnpj: "99.999.999/9999-99",
        escola: "Selecione a escola",
    }
};