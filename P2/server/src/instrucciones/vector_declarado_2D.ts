import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

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

        console.log("pasando por vector delcarado de dos dimenciones++")
        console.log(this.expresionD1)
        console.log(this.expresionD2.ejecutar(tabla))
        //? this.identificador es la variable quetendra la lista
        //? this.tipo es el tipo del vector
        //? this.new_tipo es el nuevo tipo
        //? this.expresionD1 el tamañod el vector, pero tendra 0 en cada espacio dependiendo el tamañao
        
        // INDEX
        let index_1D = 0;
        let index_2D = 0;
        //identificador
        let identi;
        for(let element of this.identificador.ejecutar(tabla)){
            identi = element
           
        }
        
        for (let i =0;i<this.expresionD1.ejecutar(tabla).valor;i++){
             for (let x =0;x<this.expresionD2.ejecutar(tabla).valor;x++){

             let valor = new Valor(0,2);
             tabla.guardarVariable(valor,"arreglonero2"+identi+"s"+index_2D+"d"+index_1D);
             index_1D++;
            }
            index_1D=0
            index_2D++;
        }
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