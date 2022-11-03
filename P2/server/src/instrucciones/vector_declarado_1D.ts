import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

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
        console.log("pasando por vector delcarado++")
        //? this.identificador es la variable quetendra la lista
        //? this.tipo es el tipo del vector
        //? this.new_tipo es el nuevo tipo
        //? this.expresionD1 el tamañod el vector, pero tendra 0 en cada espacio dependiendo el tamañao
        
        // guarlo en la tabla
        let index = 0;
        //identificador
        let identi;
        for(let element of this.identificador.ejecutar(tabla)){
            identi = element
           
        }
        for (let i =0;i<this.expresionD1.ejecutar(tabla).valor;i++){
             // valor y variable                             valor
             let valor = new Valor(0,2);
             tabla.guardarVariable(valor,"arreglonero1"+identi+"s"+index);
             index++;

        }
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