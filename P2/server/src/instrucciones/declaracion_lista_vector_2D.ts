import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class DeclaracionListaVector_2D extends Instruccion {


    constructor(    
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public D2_a: string,
        public D2_b: string,
        public identificador: string,
        public lista_valores_1: Instruccion,
        public lista_valores_2: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
            
    
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" DECLARACION ARRAY 2D "+"\"] \n";
        let hijo1 = this.ID+"DECLA2D"+"[label=\""+this.tipo+"\"] \n";
        let hijo2 =this.lista_valores_1.graficar()+" \n";
        let hijo3 =this.lista_valores_2.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.ID+"DECLA2D"+"\n";
        retorno = retorno + this.ID+"->"+this.lista_valores_1.ID+"\n";
        retorno = retorno + this.ID+"->"+this.lista_valores_2.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.D2_a +this.D2_b +this.identificador +this.lista_valores_1 +this.lista_valores_2 +" lo encontre en la linea "+this.line);
    }
}