import { Instruccion } from "../abstractas/instruccion";

export class Ternario extends Instruccion {


    constructor(
        public expresion_boleana: string,
        public expresion_si_cumple: string,
        public signo_interrogacion: string,
        public expresion_no_cumple: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
           
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        console.log("Encontre una ternario, expresion_izquierda:"+this.expresion_boleana+" signo_interrogacion:"+this.signo_interrogacion+" con expresion_si_cumple "+this.expresion_si_cumple+" con expresion_no_cumple "+this.expresion_no_cumple+" lo encontre en la linea "+this.line);
        //metodo para guardar la variable
        
    }
}