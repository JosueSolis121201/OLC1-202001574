import { Instruccion } from "../abstractas/instruccion";

export class Acceso_1D extends Instruccion {


    constructor(    
        public identificador: string,
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
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.valor +" lo encontre en la linea "+this.line);
    }
        
    
}