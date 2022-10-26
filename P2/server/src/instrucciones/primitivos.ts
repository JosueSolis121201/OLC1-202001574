import { Instruccion } from "../abstractas/instruccion";
import { Valor } from "../datos/valor";

export class Primitivos extends Instruccion {


    constructor(
        public valor: Valor,
        linea: number, columna:number) {
        super(linea,columna);

    }

    public ejecutar():any {
        
    }
    public graficar(): any {
        let valStr:string = this.valor.obtenerValor().toString();
        let retornar =this.ID+"[label=\""+" Primitivo: " + valStr.replace('"',' ' ) +"\"] \n";


        return retornar;

    }
    public imprimir(): any {
        console.log("ENCONTRO UN VALOR DE : "+this.valor)
        
    }
}