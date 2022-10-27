import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class DoUntil extends Instruccion {
    constructor(    
        public instruccion: Instruccion,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
           
    
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" DO UNTIL "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";
        let hijo1 =this.instruccion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.instruccion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre un DOUNTIL , nombre:"+this.instruccion+" con expresion "+this.expresion +" lo encontre en la linea "+this.line);
        
    }
}