import { Instruccion } from "../abstractas/instruccion";

export class ToCharArray extends Instruccion {


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
        console.log("Encontre una ToCharArray, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
    }
}