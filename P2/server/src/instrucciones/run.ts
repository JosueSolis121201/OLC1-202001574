import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Run extends Instruccion {


    constructor(
        public identificador: string,
        public valores: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" RUN "+"\"] \n";
        let hijo1 = this.ID+"RUN"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 =this.valores.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"RUN"+"\n";
        retorno = retorno + this.ID+"->"+this.valores.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una RUN, nombre:"+this.identificador+this.valores+" con expresion "+" lo encontre en la linea "+this.line);
        
    }
}