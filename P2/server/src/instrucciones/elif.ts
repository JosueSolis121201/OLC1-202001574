import { Instruccion } from "../abstractas/instruccion";

export class Elif extends Instruccion {


    constructor(
        public Operacion_booleana: string,
        public instrucciones: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
        //metodo para guardar la variable
    }
}