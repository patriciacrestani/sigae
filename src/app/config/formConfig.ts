export const formFieldLimits = {
    masks: {
        cpf: "999.999.999-99",
        cnpj: "99.999.999/9999-99",
        telefone: "(99) 9999-9999",
        cep: "999999-99"
    },
    lengths: {
        telefone: 10,
        cnpj: 14,
        cpf: 11,
        cep: 9
    },
    maxLengths: {
        curto: 100,
        padrao: 255,
    },
    minLengths: {
        padrao: 50,
    },
    placeholders: {
        nome: "Digite o nome",
        nomeSocial: "Digite o nome social",
        cpf: "999.999.999-99",
        cnpj: "99.999.999/9999-99",
        escola: "Selecione a escola",
        telefone: "(99) 9999-9999",
        email: "email@exemplo.com",
        logradouro: "Digite o logradouro",
        cidade: "Digite a cidade",
        cep: "999999-99",
        estado: "Digite o estado",
        pais: "Selecione o país"
    }
};