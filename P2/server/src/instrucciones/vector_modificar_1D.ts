import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class VectorModificar_1D extends Instruccion {


    constructor(    
        public identificador: Instruccion,
        public expresion: Instruccion,
        public nueva_expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
    }
    public graficar(): any {

        
        let padre =this.ID+"[label=\""+" MODIFICAR VEC 1D "+"\"] \n";
        let hijo1 =this.identificador.graficar()+" \n";
        let hijo2 =this.expresion.graficar()+" \n";
        let hijo3 =this.nueva_expresion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.identificador.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.nueva_expresion.ID+"\n";
        return retorno;

        
    }


    public imprimir(): any {
        
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.expresion +this.nueva_expresion +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
        
    }
}