import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Continue extends Instruccion {


    constructor(
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }

    public EsContinue(): boolean {
        return true
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Casteo "+"\"] \n";
        let hijo1 = this.ID+"CONTI"+"[label=\""+this.expresion+"\"] \n";

        let retorno = padre + hijo1;

        retorno = retorno + this.ID+"->"+this.ID+"CONTI"+"\n";
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre una Continue, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
    }
}