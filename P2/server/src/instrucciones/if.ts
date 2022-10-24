import { Instruccion } from "../abstractas/instruccion";

export class If extends Instruccion {


    constructor(
        public Operacion_booleana: string,
        public instrucciones: string,
        public elif: Array<Instruccion>,
        public else_if: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {


       
        if (this.else_if != null) 
        {
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+" con expresion "+this.elif+this.else_if+" lo encontre en la linea "+this.line);
        }
        else 
        {
            console.log("ELSE");
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+" con expresion "+this.elif+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
    }
}