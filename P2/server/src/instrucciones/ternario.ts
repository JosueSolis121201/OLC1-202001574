import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Ternario extends Instruccion {


    constructor(
        public expresion_boleana: Instruccion,
        public expresion_si_cumple: Instruccion,
        public signo_interrogacion: Instruccion,
        public expresion_no_cumple: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
           
    }
    public graficar(): any {
        let padre =this.ID+"[label=\""+" Ternario "+"\"] \n";
        let hijo1 = this.expresion_boleana.graficar()+"\n";
        let hijo2 = this.ID+"AAD"+"[label=\""+this.expresion_si_cumple+"\"] \n";
        let hijo3 = this.signo_interrogacion.graficar()+"\n";
        let hijo4 = this.expresion_no_cumple.graficar()+"\n";
    
        
        let retorno = padre+hijo1+hijo2+hijo3+hijo4
        
        retorno = retorno +this.ID +"->"+this.expresion_boleana.ID+"\n"
        retorno = retorno +this.ID +"->"+this.ID+"AAD"+"\n"
        retorno = retorno + this.ID +"->"+this.signo_interrogacion.ID +"\n"
        retorno = retorno + this.ID +"->"+this.expresion_no_cumple.ID +"\n"


        return retorno;
    }
    public imprimir(): any {
        console.log("Encontre una ternario, expresion_izquierda:"+this.expresion_boleana+" signo_interrogacion:"+this.signo_interrogacion+" con expresion_si_cumple "+this.expresion_si_cumple+" con expresion_no_cumple "+this.expresion_no_cumple+" lo encontre en la linea "+this.line);
        //metodo para guardar la variable
        
    }
}