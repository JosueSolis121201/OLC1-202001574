import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Println extends Instruccion {


    constructor(
        public Tipo: string,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" Println "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";

        let retorno = padre + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una println, tipo:"+this.Tipo+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        
    }
}