import { isObject } from "util";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class OperacionBinaria extends Instruccion {


    constructor(
        public izquierdo: any,
        public derecho: any,
        public signo: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        
        //metodo para guardar la variable
    }
    public graficar(): any {



        let padre =this.ID+"[label=\""+" Operadores "+"\"] \n";
        let hijo1 = this.ID+"AAC"+"[label=\""+this.izquierdo+"\"] \n";
        let hijo2 = this.signo.graficar();
        let hijo3 = this.ID+"ACCC"+"[label=\""+this.derecho+"\"] \n";

        let retornar= padre+ hijo1+hijo2+hijo3;

        retornar=retornar+this.ID +"->"+this.ID+"AAC"+"\n"
        retornar=retornar+this.ID +"->"+this.signo.ID+"\n"
        retornar=retornar+this.ID +"->"+this.ID+"ACCC"+"\n"
        
        return retornar;
        
    }
    public imprimir(): any {
        console.log("Encontre una operacion binaria, tipo:"+this.izquierdo+" nombre:"+this.signo+" lo encontre en la linea "+this.derecho);
    }
}