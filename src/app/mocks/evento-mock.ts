import { IEvento } from "../models/evento";
import { PESSOAS } from "./pessoas-mock";

export const EVENTOS: IEvento[] = [
    {
        id: 1,
        titulo: "Desafio",
        descricao: "Entrega do desafio da VICERI SEIDOR",
        participantes: PESSOAS,
        data: "28/11/2024",
        horario: "15:00",
        planoAcao: null
    }
];