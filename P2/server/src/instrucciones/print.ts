import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Print extends Instruccion {


    constructor(
        public Tipo: string,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        console.log("pasando por PRINT")
        console.log(this.expresion.ejecutar(tabla).valor);
    }


    
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Print "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";

        let retorno = padre + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una print, tipo:"+this.Tipo+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        
    }
}