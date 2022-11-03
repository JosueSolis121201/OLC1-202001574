import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Acceso_2D extends Instruccion {


    constructor(    
        public identificador: string,
        public valor_1: number,
        public valor_2: number,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        console.log("pasando por acceso vector de dos dimensiones")

        //? identificador = nombre variable
        //? expresion = pocicion del lista deseada
        //? nueva_expresion = el nuevo valor que tendra la pocicion buscada anterior
        
        // modificar busca en tabla y muestra valor de la lista declarada
        // elemento es el nombre de la vairable
        let iterrador=this.valor_1*this.valor_2
            for(let i=0;i<=iterrador;i++){ 
                if(i==iterrador){
                    let BUSCANDO_USANDO_NOMBRE_COMPUESTO="arreglonero2"+this.identificador+"s"+(this.valor_1-1)+"d"+(this.valor_2-1);
                    console.log(BUSCANDO_USANDO_NOMBRE_COMPUESTO)
                     // valor y variable                             valor
                    
                    let valor_variable=tabla.buscarVariable(BUSCANDO_USANDO_NOMBRE_COMPUESTO);
                    //valor en tabla con pocicion buscada
                    let valor=valor_variable.valor;
                    let tipo=valor_variable.tipo;
                    console.log("BUSCANDO_USANDO_NOMBRE_COMPUESTO+**++*")
                    console.log(valor)
                    console.log(tipo)
                    console.log("BUSCANDO_USANDO_NOMBRE_COMPUESTO+*+*+*+")
                    // se guarda la nueva expresion que es = this.nueva_expreison
                    let nuevoValor=new Valor(valor,tipo);
                    return nuevoValor

                }
            }
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" ACCESO 2D "+"\"] \n";
        let hijo1 = this.ID+"IIIA"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 = this.ID+"IIIIA"+"[label=\""+this.valor_1+"\"] \n";
        let hijo3 = this.ID+"IIIIAA"+"[label=\""+this.valor_2+"\"] \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.ID+"IIIA"+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"IIIIA"+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"IIIIAA"+"\n"; 
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.valor_1 +this.valor_2 +" lo encontre en la linea "+this.line);
        
    }
}