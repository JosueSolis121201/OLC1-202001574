import { Instruccion } from "../abstractas/instruccion";

export class While extends Instruccion {


    constructor(
        public expresion: string,
        public instruccion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una WHILE, nombre:"+this.expresion+" con expresion "+this.instruccion+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}