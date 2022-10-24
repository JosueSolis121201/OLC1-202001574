import { Instruccion } from "../abstractas/instruccion";

export class Funcion extends Instruccion {


    constructor(
        public identificador: string,
        public parametros: Array<Instruccion>,
        public tipo: string,
        public instrucciones: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        
      
            console.log("Encontre una FUNCION, nombre:"+this.identificador+this.parametros+" con ex"+this.tipo+"presion "+this.instrucciones+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
    }
}