import { Instruccion } from "../abstractas/instruccion";

export class Incremento extends Instruccion {


    constructor(
        public operacion: string,
        public signo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una , nombre:"+this.operacion+" con expresion "+this.signo+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}