import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";
import { ToUpper } from "./upper";

export class ToLower extends Instruccion {


    constructor(
        public expresion: any,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any { 
        //le mandan una expresion de tipo string no le importan de donde sea ni de quien
        // pasando a string
        let nuevo_string=this.expresion.ejecutar(tabla).valor.toLowerCase()
        //TOLOWER pone todo en minusculas
        //retornar el nuevo valor
        let nuevoVal = new Valor(nuevo_string,3)
        return nuevoVal;
           
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" LOWER "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";

        let retorno = padre  + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
    }
    public imprimir(): any {
        
    }
}