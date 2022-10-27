import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class VectorModificar_2D extends Instruccion {


    constructor(    
        public identificador: Instruccion,
        public expresion_1: Instruccion,
        public expresion_2: Instruccion,
        public nueva_expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
    }
    public graficar(): any {
        

        
        let padre =this.ID+"[label=\""+" MODIFICAR VEC 2D "+"\"] \n";
        let hijo1 =this.identificador.graficar()+" \n";
        let hijo2 =this.expresion_1.graficar()+" \n";
        let hijo3 =this.expresion_2.graficar()+" \n";
        let hijo4 =this.nueva_expresion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3+hijo4;

        retorno = retorno + this.ID+"->"+this.identificador.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion_1.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion_2.ID+"\n";
        retorno = retorno + this.ID+"->"+this.nueva_expresion.ID+"\n";
        
    }
    public imprimir(): any {
        
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.expresion_1 +this.expresion_2+this.nueva_expresion +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
        
    }
}