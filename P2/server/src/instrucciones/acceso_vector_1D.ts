import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Acceso_1D extends Instruccion {


    constructor(    
        public identificador: string,
        public valor: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
            
    
       
        //metodo para guardar la variable
    }

    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" ACCESO 1D "+"\"] \n";
        let hijo1 = this.ID+"III"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 = this.ID+"IIII"+"[label=\""+this.valor+"\"] \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"III"+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"IIII"+"\n";
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.valor +" lo encontre en la linea "+this.line);
    }
        
    
}