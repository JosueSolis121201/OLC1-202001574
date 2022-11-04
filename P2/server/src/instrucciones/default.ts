import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Default extends Instruccion {


    constructor(
        public instrucciones: Instruccion, 
        linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar(tabla:TablaSimbolos):any {
           
        //Else ultima parte del if por ende si se llega a este punto solo se debe de ejecutar instrucciones tabla
        let instru:Valor = this.instrucciones.ejecutar(tabla);
        // retorna istruccion default-> para switch
        return instru
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" DEFAULT "+"\"] \n";
        let hijo2 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo2;

        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        
    }
    
}