import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Llamada extends Instruccion {


    constructor(
        public identificador: string,
        public parametros: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
           
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" LLAMADA "+"\"] \n";
        let hijo1 = this.ID+"LLAR"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 =this.parametros.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"LLAR"+"\n";
        retorno = retorno + this.ID+"->"+this.parametros.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una METODO, nombre:"+this.identificador+this.parametros+" con expresionlo encontre en la linea "+this.line);
        
    }
}