import { Instruccion } from "../abstractas/instruccion";

export class For extends Instruccion {


    constructor(
        public expresion: string,
        public condicion: string,
        public actualizacion: string,
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
        console.log("Encontre una FOR, nombre:"+this.expresion+" con expresion "+this.condicion+this.actualizacion+this.instrucciones+" lo encontre en la linea "+this.line);
    }
}