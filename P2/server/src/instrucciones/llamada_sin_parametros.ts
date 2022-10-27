import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class LlamadaSinParametros extends Instruccion {


    constructor(
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" LLAMADA SIN PARAMETROS "+"\"] \n";
        let hijo1 = this.ID+"PARAMETROS"+"[label=\""+this.identificador+"\"] \n";

        let retorno = padre + hijo1 ;

        retorno = retorno + this.ID+"->"+this.ID+"PARAMETROS"+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una METODO, nombre:"+this.identificador+" con expresionlo encontre en la linea "+this.line);
        
    }
}