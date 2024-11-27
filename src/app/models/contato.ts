import { BaseEntity } from "./base-entity";
  
export interface IContato {
    id: number;
    email: string;
    telefones: string[];
}

export class Contato extends BaseEntity implements IContato {
    email: string;
    telefones: string[];

    override map(dados) {
        if(!dados) {
            return;
        }

        super.map(dados);
        
        // if(!!this.telefones && this.telefones.length > 0) {
        //     this.telefones.forEach(telefone => telefone.replace(/\D/g, ''));
        // }
    }
}