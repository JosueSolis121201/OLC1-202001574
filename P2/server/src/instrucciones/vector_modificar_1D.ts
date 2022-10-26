import { Instruccion } from "../abstractas/instruccion";

export class VectorModificar_1D extends Instruccion {


    constructor(    
        public identificador: string,
        public expresion: string,
        public nueva_expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.expresion +this.nueva_expresion +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
        
    }
}