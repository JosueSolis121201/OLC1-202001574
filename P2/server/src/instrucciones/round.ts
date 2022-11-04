import { IpcSocketConnectOpts } from "net";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Round extends Instruccion {

    linea:any
    columna :any
    constructor(
        public valor: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
        this.linea=linea
        this.columna=columna
    }

    public ejecutar(tabla:TablaSimbolos):any { 
        //le mandan una expresion de tipo string no le importan de donde sea ni de quien
        // pasando a float
        let nuevo_int=Math.round(this.valor.ejecutar(tabla).valor)
        //TOUPPER pone todo en mayusculas
        //retornar el nuevo valor
        let nuevoVal = new Valor(nuevo_int,1,this.columna,this.linea)
        return nuevoVal;
           
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" ROUND "+"\"] \n";
        let hijo2 =this.valor.graficar()+" \n";

        let retorno = padre  + hijo2;

        retorno = retorno + this.ID+"->"+this.valor.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una Round, nombre:"+" con expresion "+this.valor+" lo encontre en la linea "+this.line);
        
    }
}