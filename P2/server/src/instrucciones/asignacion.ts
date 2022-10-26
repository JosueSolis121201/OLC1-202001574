import { Instruccion } from "../abstractas/instruccion";

export class Asignacion extends Instruccion {


    constructor(
        public identificador: Instruccion,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Asignacion "+"\"] \n";
        let hijo1 = this.identificador.graficar();
        let hijo2 = this.expresion.graficar();

        let retornar = padre + hijo1 + hijo2+"\n";

        retornar =retornar+ this.ID+"->"+this.identificador.ID+"\n"
        retornar = retornar+ this.ID +"->"+this.expresion.ID+"\n"
        
        return retornar;
        
    }
    public imprimir(): any {
        
        console.log("Encontre una asignacion, nombre:"+this.identificador+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
    }
}