import { Instruccion } from "../abstractas/instruccion";

export class Round extends Instruccion {


    constructor(
        public valor: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
           
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        console.log("Encontre una Round, nombre:"+" con expresion "+this.valor+" lo encontre en la linea "+this.line);
        
    }
}