export class BaseEntity {
    id: number;
    
    constructor(dados?) {
        if(!dados) {
            return;
        }
        this.preenchePropriedades(dados);
    }

    setId(id: number) {
        this.id = id;
    }

    map(dados) {
        if(!dados) {
            return;
        }

        this.preenchePropriedades(dados);
    }

    preenchePropriedades(dados) {
        Object.keys(this).forEach(key => {
            if(!!dados[key]) this[key] = dados[key];
        });
    }

    static mapList<T extends BaseEntity>(dados: any[]): T[] {
        if(!dados || !Array.isArray(dados) || dados.length <= 0) {
            return [new this() as T];
        }

        return dados.map(dado => new this(dado) as T);
    }
}