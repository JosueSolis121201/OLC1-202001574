import { IpcSocketConnectOpts } from "net";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class ToCharArray extends Instruccion {


    constructor(
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" CharArray "+"\"] \n";
        let hijo1 =this.expresion.graficar()+" \n";

        let retorno = padre + hijo1;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre una ToCharArray, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
    }
}