import { Instruccion } from "../abstractas/instruccion";

export class Default extends Instruccion {


    constructor(
        public instrucciones: string,
        linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar():any {
            console.log("Encontre una SWITCH, tipo: "+"nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
        //metodo para guardar la variable
    }
    
}