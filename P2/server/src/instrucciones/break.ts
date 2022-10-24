import { Instruccion } from "../abstractas/instruccion";

export class Break extends Instruccion {


    constructor(
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una Return, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}