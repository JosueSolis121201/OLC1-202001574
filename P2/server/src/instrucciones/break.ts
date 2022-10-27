import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Break extends Instruccion {


    constructor(
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" EXpresion_BREAK "+"\"] \n";
        let hijo1 = this.ID+"ADI"+"[label=\""+this.expresion+"\"] \n";

        let retorno = padre + hijo1 ;

        retorno = retorno + this.ID+"->"+this.ID+"ADI"+"\n";
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre una Return, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
    }
}