import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class VectorDeclarado_1D extends Instruccion {


    constructor(
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public identificador: Instruccion,
        public new_tipo: Instruccion,
        public expresionD1: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
           
    
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" DECLARAR VECTOR 1D "+"\"] \n";
        let hijo1 = this.ID+"VEC1"+"[label=\""+this.tipo+"\"] \n";
        let hijo2 =this.identificador.graficar()+" \n";
        let hijo3 = this.ID+"VEC11"+"[label=\""+this.new_tipo+"\"] \n";
        let hijo4 =this.expresionD1.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3+hijo4;

        retorno = retorno + this.ID+"->"+this.ID+"VEC1"+"\n";
        retorno = retorno + this.ID+"->"+this.identificador.ID+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"VEC11"+"\n";
        retorno = retorno + this.ID+"->"+this.expresionD1.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.identificador +this.new_tipo +this.expresionD1+" lo encontre en la linea "+this.line);
        
    }
}