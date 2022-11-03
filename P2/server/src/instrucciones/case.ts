import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Case extends Instruccion {


    constructor(
        public Operacion_booleana: Instruccion,
        public instrucciones: Instruccion,
        linea: number, columna:number) { 
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
    }

    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" CASE "+"\"] \n"; 
        let hijo1 =this.Operacion_booleana.graficar()+" \n";
        let hijo2 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.Operacion_booleana.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una Case, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
    }
    
}