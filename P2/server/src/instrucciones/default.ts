import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Default extends Instruccion {


    constructor(
        public instrucciones: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar(tabla:TablaSimbolos):any {
           
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" DEFAULT "+"\"] \n";
        let hijo2 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo2;

        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una SWITCH, tipo: "+"nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
        
    }
    
}