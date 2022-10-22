import { Instruccion } from "../abstractas/instruccion";

export class If extends Instruccion {


    constructor(
        public Operacion_booleana: string,
        public instrucciones: string,
        public elif: string,
        public else_if: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {




        if (this.elif && this.else_if != null) 
        {
            console.log("4444444444444444")
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+" con expresion "+this.elif+this.else_if+" lo encontre en la linea "+this.line);
        }
        if (this.elif != null) 
        {
            console.log("3333333333333333333333")
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+" con expresion "+this.elif+" lo encontre en la linea "+this.line);
        }
        if (this.else_if != null) 
        {
            console.log("222222222222222222222222")
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+" con expresion "+this.else_if+" lo encontre en la linea "+this.line);
        }
        else
        {
            console.log("1111111111111111111111111111111111111")
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
    }
}