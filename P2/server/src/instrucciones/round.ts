import { IpcSocketConnectOpts } from "net";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Round extends Instruccion {


    constructor(
        public valor: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
           
        
       
        //metodo para guardar la variable
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