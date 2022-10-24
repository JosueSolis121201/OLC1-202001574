import { Instruccion } from "../abstractas/instruccion";
import { Valor } from "../datos/valor";

export class Primitivos extends Instruccion {


    constructor(
        public valor: Valor,
        linea: number, columna:number) {
        super(linea,columna);

    }

    public ejecutar():any {
        console.log(this.valor)
    }
}