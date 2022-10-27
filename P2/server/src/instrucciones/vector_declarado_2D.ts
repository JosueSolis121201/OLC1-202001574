import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class VectorDeclarado_2D extends Instruccion {


    constructor(
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public D2_a: string,
        public D2_b: string,
        public identificador: Instruccion,
        public new_tipo: Instruccion,
        public expresionD1: Instruccion,
        public expresionD2: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" DECLARAR VECTOR 2D "+"\"] \n";
        let hijo1 = this.ID+"VEC2"+"[label=\""+this.tipo+"\"] \n";
        let hijo2 =this.identificador.graficar()+" \n";
        let hijo3 = this.ID+"VEC22"+"[label=\""+this.new_tipo+"\"] \n";
        let hijo4 =this.expresionD1.graficar()+" \n";
        let hijo5 =this.expresionD2.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3+hijo4+hijo5;

        retorno = retorno + this.ID+"->"+this.ID+"VEC2"+"\n";
        retorno = retorno + this.ID+"->"+this.identificador.ID+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"VEC22"+"\n";
        retorno = retorno + this.ID+"->"+this.expresionD1.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresionD2.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        
        if(this.D2_a && this.D2_b != null){
            console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.D2_a +this.D2_b +this.identificador +this.new_tipo +this.expresionD1 +this.expresionD2 +" lo encontre en la linea "+this.line);

        }
        else{
            console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.identificador +this.new_tipo +this.expresionD1+" lo encontre en la linea "+this.line);
        }
      
        
       
        //metodo para guardar la variable
        
    }
}