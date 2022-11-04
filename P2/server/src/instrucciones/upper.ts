import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class ToUpper extends Instruccion {

    linea:any
    columna:any
    constructor(
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
        this.linea=linea
        this.columna=columna
    }

    public ejecutar(tabla:TablaSimbolos):any { 
        //le mandan una expresion de tipo string no le importan de donde sea ni de quien
        // pasando a string
        let nuevo_string=this.expresion.ejecutar(tabla).valor.toUpperCase()
        //TOUPPER pone todo en mayusculas
        //retornar el nuevo valor
        let nuevoVal = new Valor(nuevo_string,3,this.linea,this.columna)
        return nuevoVal;
           
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" UPPER "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";

        let retorno = padre + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una UPPWER, nombre:"+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        
    }
}