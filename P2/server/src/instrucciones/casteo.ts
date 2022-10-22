import { Instruccion } from "../abstractas/instruccion";

export class Casteo extends Instruccion {


    constructor(
        public Tipo: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una casteo, tipo:"+this.Tipo+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}