import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Parametros extends Instruccion {


    constructor(
        public tipo: string,
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any { 
        console.log("pasando por parametro")
        // parametros guardan en tabla  
        //retorno tabla es de tipo valor
        //comprobar el valor
        let tipo_encontrado:number;
        let valor_encontrado;
        switch (this.tipo) {
            case "int"://INT
                tipo_encontrado=1;
                valor_encontrado=0;
                break;
            case "double": //FLOAT
                
                tipo_encontrado=2;
                valor_encontrado=0.0;
                break;
            case "string"://STRING
                
                tipo_encontrado=3;
                valor_encontrado="";
                break;
            case"boolean"://BOOL
            
                tipo_encontrado=4
                valor_encontrado=false;
                break;
            case "char"://CHAR
                //6 VARIABLE
                tipo_encontrado=5;
                valor_encontrado='';
                break;
            default:
                console.log({error:"ERROR EN parametro tipo"})
                tipo_encontrado=1
                break;
        }

        tabla.guardarVariable(new Valor(valor_encontrado,tipo_encontrado),this.identificador)  
        return this.identificador      
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