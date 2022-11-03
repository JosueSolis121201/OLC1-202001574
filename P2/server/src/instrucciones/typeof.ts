import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Typeof extends Instruccion {


    constructor(
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //le mandan una expresion de tipo string no le importan de donde sea ni de quien 
        // pasando a string
        console.log(this.expresion.ejecutar(tabla))
        let tipo_encontrado;
         switch (this.expresion.ejecutar(tabla).tipo) {
            case 1://INT
                tipo_encontrado="int";
                break;
            case 2: //FLOAT
                
                tipo_encontrado="double";
                break;
            case 3://STRING
                
                tipo_encontrado="string";
                break;
            case 4: //BOOL
            
                tipo_encontrado="boolean";
                break;
            case 5://CHAR
                tipo_encontrado="char";
                break;
            default:
                console.log({error:"ERROR EN typeof"})
                tipo_encontrado="int"
                break;
        }
        //TOLOWER pone todo en minusculas
        //retornar el nuevo valor
        let nuevoVal = new Valor(tipo_encontrado,3)
        return nuevoVal;
           
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" TYPEOF "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";

        let retorno = padre + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una Typeof, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
        
    }
}