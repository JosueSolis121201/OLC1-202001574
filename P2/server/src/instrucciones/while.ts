import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class While extends Instruccion {


    constructor(
        public expresion: Instruccion,
        public instruccion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
    }
    public graficar(): any {

        
        let padre =this.ID+"[label=\""+" WHILE "+"\"] \n";
        let hijo1 =this.expresion.graficar()+" \n";
        let hijo2 =this.instruccion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instruccion.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        
      
        console.log("Encontre una WHILE, nombre:"+this.expresion+" con expresion "+this.instruccion+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
        
    }
}