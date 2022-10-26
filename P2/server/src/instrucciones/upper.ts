import { Instruccion } from "../abstractas/instruccion";

export class ToUpper extends Instruccion {


    constructor(
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        console.log("Encontre una UPPWER, nombre:"+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        
    }
}