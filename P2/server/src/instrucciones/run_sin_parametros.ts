import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class RunSinParametros extends Instruccion {


    constructor(
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        let padre =this.ID+"[label=\""+" RUN VACIO "+"\"] \n";
        let hijo1 = this.ID+"RUNV"+"[label=\""+this.identificador+"\"] \n";

        let retorno = padre + hijo1 ;

        retorno = retorno + this.ID+"->"+this.ID+"RUNV"+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una runvacio, nombre:"+this.identificador+" con expresion "+" lo encontre en la linea "+this.line);
        
    }
}