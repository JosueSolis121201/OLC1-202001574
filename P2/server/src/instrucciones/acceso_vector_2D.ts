import { Instruccion } from "../abstractas/instruccion";

export class Acceso_2D extends Instruccion {


    constructor(    
        public identificador: string,
        public valor_1: string,
        public valor_2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
           
    
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
    }

    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.valor_1 +this.valor_2 +" lo encontre en la linea "+this.line);
        
    }
}