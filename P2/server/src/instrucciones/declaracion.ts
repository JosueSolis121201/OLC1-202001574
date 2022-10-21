import { Instruccion } from "../abstractas/instruccion";

export class Declaracion extends Instruccion {


    constructor(
        public nombre: string,
        public tipo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        //metodo para guardar la variable
    }
}