import { Instruccion } from "../abstractas/instruccion";

export class RunSinParametros extends Instruccion {


    constructor(
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una runvacio, nombre:"+this.identificador+" con expresion "+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}