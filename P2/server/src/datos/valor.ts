
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
            case 1:
                
                return parseInt(valor);
            case 2:
                
                return parseFloat(valor);
            case 3:
                
                return valor;
            case 4:
                if(valor=="true"){
                    return true;
                }
                return false;
            case 5:
                
                return valor;
            default:
                console.log({error:"ERROR EN VALOR"})
                break;
        }
    }

    public obtenerValor():any {
    }
}