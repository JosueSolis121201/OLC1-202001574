import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Parametros extends Instruccion {


    constructor(
        public tipo: string,
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" PARAMETRO "+"\"] \n";
        let hijo1 = this.ID+"PART"+"[label=\""+this.tipo+"\"] \n";
        let hijo2 = this.ID+"PARI"+"[label=\""+this.identificador+"\"] \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"PART"+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"PARI"+"\n";
        return retorno;

        
        
    }
    public imprimir(): any {
        console.log("Encontre una METODOVOID, nombre:"+this.tipo+this.identificador+" con expresion  lo encontre en la linea "+this.line);
        
    }
}