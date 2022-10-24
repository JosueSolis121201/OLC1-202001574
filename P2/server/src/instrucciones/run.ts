import { Instruccion } from "../abstractas/instruccion";

export class Run extends Instruccion {


    constructor(
        public identificador: string,
        public valores: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una RUN, nombre:"+this.identificador+this.valores+" con expresion "+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}