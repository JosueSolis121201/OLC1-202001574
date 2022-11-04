import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class DeclaracionListaVector_1D extends Instruccion {


    constructor(    
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public identificador: any,
        public lista_valores: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any { 
        // declarar guarda en tabla 
        let lista:[Valor] =this.lista_valores.ejecutar(tabla)
        // guarlo en la tabla
        let index = 0;
        //identificador
        let identi;
        for(let element of this.identificador.ejecutar(tabla)){
            identi = element
        }
        for(let elemto of lista){
            // valor y variable                             valor
            tabla.guardarVariable(elemto,"arreglonero1"+identi+"s"+index);
            index++;
        }
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
    }
}