import { Instruccion } from "../abstractas/instruccion";

export class LlamadaSinParametros extends Instruccion {


    constructor(
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        console.log("Encontre una METODO, nombre:"+this.identificador+" con expresionlo encontre en la linea "+this.line);
        
    }
}