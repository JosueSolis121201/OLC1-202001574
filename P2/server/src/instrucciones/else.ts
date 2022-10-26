import { Instruccion } from "../abstractas/instruccion";

export class Else extends Instruccion {


    constructor(
        public instrucciones: string,
        linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar():any {
           
        //metodo para guardar la variable
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        console.log("Encontre una IF, tipo: "+"nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
        
    }
    
}