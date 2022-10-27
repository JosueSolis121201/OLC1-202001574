import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class DeclaracionListaVector_1D extends Instruccion {


    constructor(    
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public identificador: string,
        public lista_valores: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
           
    
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" DECLARACION ARRAY 1D "+"\"] \n";
        let hijo1 = this.ID+"DECLA1D"+"[label=\""+this.tipo+"\"] \n";
        let hijo2 =this.lista_valores.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"DECLA1D"+"\n";
        retorno = retorno + this.ID+"->"+this.lista_valores.ID+"\n";
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.identificador +this.lista_valores +" lo encontre en la linea "+this.line);
    }
}