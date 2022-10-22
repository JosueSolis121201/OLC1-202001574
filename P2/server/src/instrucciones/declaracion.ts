import { Instruccion } from "../abstractas/instruccion";

export class Declaracion extends Instruccion {


    constructor(
        public tipo: string,
        public identificador: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        if (this.expresion != null) 
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificador+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        }
        else
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificador+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
    }
}