import { IPessoa } from "../models/pessoa";

export const PESSOAS: IPessoa[] = [
    {
        id: 1,
        nome: "Fulano de Tal",
        nomeSocial: "",
        cpf: "123.456.789-99",
        cnpj: "73.257.813/0001-35",
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
            id: 1,
            cidade: "Rio de Janeiro",
            cep: "12345678",
            estado: "RJ",
            pais: "Brasil",
            logradouro: "Rua do Rio de Janeiro"
        }
    }
];