import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Acceso_2D extends Instruccion {


    constructor(    
        public identificador: string,
        public valor_1: string,
        public valor_2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
           
    
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" ACCESO 2D "+"\"] \n";
        let hijo1 = this.ID+"IIIA"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 = this.ID+"IIIIA"+"[label=\""+this.valor_1+"\"] \n";
        let hijo3 = this.ID+"IIIIAA"+"[label=\""+this.valor_2+"\"] \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.ID+"IIIA"+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"IIIIA"+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"IIIIAA"+"\n";
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.valor_1 +this.valor_2 +" lo encontre en la linea "+this.line);
        
    }
}