import { Instruccion } from "../abstractas/instruccion";

export class MetodoVoid extends Instruccion {


    constructor(
        public identificador: string,
        public parametros: string,
        public instrucciones: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        console.log("Encontre una METODOVOID, nombre:"+this.identificador+this.parametros+" con expresion "+this.instrucciones+" lo encontre en la linea "+this.line);
        
    }
}