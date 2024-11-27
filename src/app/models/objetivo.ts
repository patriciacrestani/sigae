import { BaseEntity } from "./base-entity";
import { Problema } from "./problema";

export class Objetivo extends BaseEntity {
    titulo: string;
    problemas: Problema[];
}