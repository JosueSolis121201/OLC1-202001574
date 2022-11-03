import { Instruccion } from "../abstractas/instruccion";

export class Valor {
    valor: string;
    tipo: number;

    constructor(
        valor: any,
        tipo: number) {

        
        this.valor = this.convertirValor(tipo,valor);
        this.tipo = tipo;
    }

    public convertirValor(tipo:number, valor:string):any{ 
       
        switch (tipo) {
            case 1://INT
                return parseInt(valor);
            case 2: //FLOAT
                
                return parseFloat(valor);
            case 3://STRING
                
                return valor;
            case 4://BOOL
                if(valor=="true" || valor || parseInt(valor) == 1){
                    return true;
                }
                return false;
            case 5://CHAR
                //6 VARIABLE
                return valor;
            case 6://6 VARIABLE
                return valor;
            default:
                console.log({error:"ERROR EN VALOR"})
                break;
        }
    }

    public obtenerValor():any {

        return this.valor;
    }
}

export class Symbol2 {
    constructor(public id: string, public type: Instruccion) {}
  }