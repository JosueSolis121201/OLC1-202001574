import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Push extends Instruccion {


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
        let padre =this.ID+"[label=\""+" Push "+"\"] \n";
        let hijo1 = this.ID+"PUSH"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 =this.valores.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"PUSH"+"\n";
        retorno = retorno + this.ID+"->"+this.valores.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una PUSH, nombre:"+this.identificador+this.valores+" con expresion "+" lo encontre en la linea "+this.line);
        
    }
}