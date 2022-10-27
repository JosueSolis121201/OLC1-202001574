import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Casteo extends Instruccion {


    constructor(
        public Tipo: Instruccion,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
           
        
       
        //metodo para guardar la variable
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