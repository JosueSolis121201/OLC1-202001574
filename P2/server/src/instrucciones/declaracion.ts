import { Instruccion } from "../abstractas/instruccion";

export class Declaracion extends Instruccion {


    constructor(
        public tipo: string,
        public identificador: Instruccion,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        
    }
    public graficar(): any {
       
        
    }
    public imprimir(): any {
        
        this.identificador.imprimir();

        if (this.expresion != null) 
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificador+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        }
        else
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificador+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
        
    }
}