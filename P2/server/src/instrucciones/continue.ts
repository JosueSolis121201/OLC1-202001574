import { Instruccion } from "../abstractas/instruccion";

export class Continue extends Instruccion {


    constructor(
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una Continue, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}