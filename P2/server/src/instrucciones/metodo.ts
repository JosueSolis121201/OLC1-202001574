import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Metodo extends Instruccion {


    constructor(
        public identificador: string,
        public parametros: Instruccion,
        public instrucciones: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" METODO  "+"\"] \n";
        let hijo1 = this.ID+"MVOID"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 =this.parametros.graficar()+" \n";
        let hijo3 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.ID+"MVOID"+"\n";
        retorno = retorno + this.ID+"->"+this.parametros.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una METODO, nombre:"+this.identificador+this.parametros+" con expresion "+this.instrucciones+" lo encontre en la linea "+this.line);
        
    }
}