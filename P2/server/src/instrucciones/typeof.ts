import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Typeof extends Instruccion {
    linea:any
    columna:any

    constructor(
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
        this.linea=linea
        this.columna=columna
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //le mandan una expresion de tipo string no le importan de donde sea ni de quien 
        // pasando a string
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
        let nuevoVal = new Valor(tipo_encontrado,3,this.linea,this.columna)
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
        
    }
}