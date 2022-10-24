import { Instruccion } from "../abstractas/instruccion";

export class Switch extends Instruccion {


    constructor(
        public Operacion_booleana: string,
        public case_list: Array<Instruccion>,
        public default_switch: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {


       
        if (this.default_switch != null) 
        {
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.case_list+" con expresion "+this.default_switch+" lo encontre en la linea "+this.line);
        }
        else 
        {
            console.log("ELSE");
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.case_list+" con expresion "+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
    }
}