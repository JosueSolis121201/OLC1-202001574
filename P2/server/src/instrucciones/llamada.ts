import { Instruccion } from "../abstractas/instruccion";

export class Llamada extends Instruccion {


    constructor(
        public identificador: string,
        public parametros: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
      
            console.log("Encontre una METODO, nombre:"+this.identificador+this.parametros+" con expresionlo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}