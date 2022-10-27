import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Primitivos extends Instruccion {


    constructor(
        public valor: Valor,
        linea: number, columna:number) {
        super(linea,columna);

    }

    public ejecutar(tabla:TablaSimbolos):any {
        
    }
    public graficar(): any {
        let valStr:string = this.valor.obtenerValor().toString();
        
        
        let retornar =this.ID+"[label=\""+" Primitivo: " + valStr.replace("\"","").replace("\"","") +"\"] \n";
        retornar= retornar 
        return retornar;

    } 

    public imprimir(): any {
        console.log("ENCONTRO UN VALOR DE : "+this.valor)
        
    }
}