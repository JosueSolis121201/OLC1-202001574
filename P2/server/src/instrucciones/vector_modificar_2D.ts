import { Instruccion } from "../abstractas/instruccion";

export class VectorModificar_2D extends Instruccion {


    constructor(    
        public identificador: string,
        public expresion_1: string,
        public expresion_2: string,
        public nueva_expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.expresion_1 +this.expresion_2+this.nueva_expresion +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
        
    }
}