import { Pessoa } from "../models/pessoa";

export const PESSOAS: Pessoa[] = [
    {
        id: 1,
        nome: "Fulano de Tal",
        nomeSocial: "",
        cpf: "123456789-99",
        cnpj: "73257813000135",
        contato: {
            id: 1,
            email: "fulanotal@gmail.com",
            telefones: [
                "2112345678"
            ]
        },
        escola: {
            id: 1,
            nome: "Primeira escola"
        },
        endereco: {
            cidade: "Rio de Janeiro",
            cep: "12345678",
            estado: "RJ",
            pais: "Brasil",
            logradouro: "Rua do Rio de Janeiro"
        }
    },
]