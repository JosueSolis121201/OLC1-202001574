import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class ToString extends Instruccion {


    constructor(
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" TOSTRING "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";

        let retorno = padre  + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una ToString, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
        
    }
}