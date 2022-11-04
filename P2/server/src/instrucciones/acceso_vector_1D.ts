import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Acceso_1D extends Instruccion {
    
    linea:any
    columna:any
    constructor(    
        public identificador: Instruccion, 
        public valor: number, 
        linea: number, columna:number) {
        super(linea,columna); 
        this.linea = linea
        this.columna = columna

        
    }
    
    public ejecutar(tabla:TablaSimbolos):any {

        //? identificador = nombre variable
        //? expresion = pocicion del lista deseada
        //? nueva_expresion = el nuevo valor que tendra la pocicion buscada anterior
        
        // modificar busca en tabla y muestra valor de la lista declarada
        // elemento es el nombre de la vairable
            for(let i=0;i<=this.valor;i++){ 
                if(i==this.valor){
                    let BUSCANDO_USANDO_NOMBRE_COMPUESTO="arreglonero1"+this.identificador+"s"+i;
                     // valor y variable                             valor
                    
                    let valor_variable=tabla.buscarVariable(BUSCANDO_USANDO_NOMBRE_COMPUESTO);
                    //valor en tabla con pocicion buscada
                    let valor=valor_variable.valor;
                    let tipo=valor_variable.tipo;
                    // se guarda la nueva expresion que es = this.nueva_expreison
                    let nuevoValor=new Valor(valor,tipo,this.linea,this.columna);
                    return nuevoValor

                }
            }
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" ACCESO 1D "+"\"] \n";
        let hijo1 = this.ID+"III"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 = this.ID+"IIII"+"[label=\""+this.valor+"\"] \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"III"+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"IIII"+"\n";
        return retorno;
        
    }

    public imprimir(): any {
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.valor +" lo encontre en la linea "+this.line);
    }
        
    
}