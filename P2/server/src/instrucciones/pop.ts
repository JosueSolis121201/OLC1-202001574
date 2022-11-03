import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Pop extends Instruccion {


    constructor(
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
       // tabla.buscarVariable("arreglonero1"+identi+"s"+index)
      
           
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" POP "+"\"] \n";
        let hijo1 = this.ID+"POP"+"[label=\""+this.identificador+"\"] \n";

        let retorno = padre + hijo1 ;

        retorno = retorno + this.ID+"->"+this.ID+"POP"+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una POp, nombre:"+this.identificador+" con expresion "+" lo encontre en la linea "+this.line);
        
    }
}