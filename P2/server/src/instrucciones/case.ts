import { Instruccion } from "../abstractas/instruccion";

export class Case extends Instruccion {


    constructor(
        public Operacion_booleana: string,
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
        console.log("Encontre una Case, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
    }
    
}