import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Casteo extends Instruccion {


    constructor(
        public Tipo: any,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        console.log("pasando por casteo")
        let  tipo_encontrado;
        let valor_encontrado;
        switch (this.Tipo.toLowerCase()) { 
            case "int"://INT
                tipo_encontrado=1;
                valor_encontrado =0;
                break;
            case "double": //FLOAT
                
                tipo_encontrado=2;
                valor_encontrado =0;
                break;
            case "string"://STRING
                
                tipo_encontrado=3;
                valor_encontrado ="";
                break;
            case "boolean": //BOOL
            
                tipo_encontrado=4;
                if(parseInt(this.expresion.ejecutar(tabla).valor)==1||parseInt(this.expresion.ejecutar(tabla).valor)==1.0){
                    valor_encontrado =true
                }else{
                    valor_encontrado =false
                }
                break;
            case "char"://CHAR
                tipo_encontrado=5;
                valor_encontrado ="";
                break;
            default:
                console.log({error:"ERROR EN Casteo"})
                tipo_encontrado=1;
                valor_encontrado =0;
                break;
        }



        let nuevoVal = new Valor(valor_encontrado,tipo_encontrado)
        return nuevoVal;
           
    }
    public graficar(): any {
        let padre =this.ID+"[label=\""+" Casteo "+"\"] \n";
        let hijo1 = this.ID+"ADD"+"[label=\""+this.Tipo+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"ADD"+"\n";
        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
    }
    public imprimir(): any {
        console.log("Encontre una casteo, tipo:"+this.Tipo+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
    }
}