import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class VectorModificar_1D extends Instruccion {


    constructor(    
        public identificador: Instruccion,
        public expresion: Instruccion,
        public nueva_expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        console.log("pasando por modificar vector de una dimension")

        //? identificador = nombre variable
        //? expresion = pocicion del lista deseada
        //? nueva_expresion = el nuevo valor que tendra la pocicion buscada anterior
        
        // modificar busca en tabla y muestra valor de la lista declarada
        let lista:[Instruccion] =this.identificador.ejecutar(tabla)
        // elemento es el nombre de la vairable

        let identidad:any;
        for(let elemto of lista){
            identidad=elemto;
            //obteniendo el valor de la pocicion  
            for(let i=0;i<=this.expresion.ejecutar(tabla).valor;i++){  
                if(i==this.expresion.ejecutar(tabla).valor){
                    let BUSCANDO_USANDO_NOMBRE_COMPUESTO="arreglonero1"+identidad+"s"+i;
                     // valor y variable                             valor
                    let valor_variable=tabla.buscarVariable(BUSCANDO_USANDO_NOMBRE_COMPUESTO);
                    //valor en tabla con pocicion buscada
                    let valor=valor_variable.valor;
                    let tipo=valor_variable.tipo;
                    // se guarda la nueva expresion que es = this.nueva_expreison
                    let nuevoValor=new Valor(valor,tipo);
                    tabla.guardarActualizar(this.nueva_expresion.ejecutar(tabla),BUSCANDO_USANDO_NOMBRE_COMPUESTO)
                }
            }

        }
        
    }
    public graficar(): any {

        
        let padre =this.ID+"[label=\""+" MODIFICAR VEC 1D "+"\"] \n";
        let hijo1 =this.identificador.graficar()+" \n";
        let hijo2 =this.expresion.graficar()+" \n";
        let hijo3 =this.nueva_expresion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.identificador.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.nueva_expresion.ID+"\n";
        return retorno;

        
    }


    public imprimir(): any {
        
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.expresion +this.nueva_expresion +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
        
    }
}