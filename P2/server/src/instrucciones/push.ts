import { Instruccion } from "../abstractas/instruccion";

export class Push extends Instruccion {


    constructor(
        public identificador: string,
        public valores: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una PUSH, nombre:"+this.identificador+this.valores+" con expresion "+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}