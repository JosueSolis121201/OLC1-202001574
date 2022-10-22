import { Instruccion } from "../abstractas/instruccion";

export class OperacionBinaria extends Instruccion {


    constructor(
        public izquierdo: string,
        public derecho: string,
        public signo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        console.log("Encontre una operacion binaria, tipo:"+this.izquierdo+" nombre:"+this.signo+" lo encontre en la linea "+this.derecho);
        //metodo para guardar la variable
    }
}