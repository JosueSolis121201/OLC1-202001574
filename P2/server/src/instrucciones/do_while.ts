import { Instruccion } from "../abstractas/instruccion";

export class DoWhile extends Instruccion {


    constructor(    
        public instruccion: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            console.log("Encontre un DOWHILE , nombre:"+this.instruccion+" con expresion "+this.expresion +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
    }
}