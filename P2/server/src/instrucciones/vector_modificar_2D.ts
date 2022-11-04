import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class VectorModificar_2D extends Instruccion {
    linea:any
    columna:any

    constructor(    
        public identificador: Instruccion,
        public expresion_1: Instruccion,
        public expresion_2: Instruccion,
        public nueva_expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
        this.linea=linea
        this.columna=columna
    }

    public ejecutar(tabla:TablaSimbolos):any {

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
            let iterrador=this.expresion_1.ejecutar(tabla).valor*this.expresion_2.ejecutar(tabla).valor
            for(let i=0;i<=iterrador;i++){  
                if(i==iterrador){
                    let BUSCANDO_USANDO_NOMBRE_COMPUESTO="arreglonero2"+identidad+"s"+(this.expresion_1.ejecutar(tabla).valor-1)+"d"+(this.expresion_2.ejecutar(tabla).valor-1);
                     // valor y variable                             valor
                    let valor_variable=tabla.buscarVariable(BUSCANDO_USANDO_NOMBRE_COMPUESTO);
                    //valor en tabla con pocicion buscada
                    let valor=valor_variable.valor;
                    let tipo=valor_variable.tipo;
                    // se guarda la nueva expresion que es = this.nueva_expreison
                    let nuevoValor=new Valor(valor,tipo,this.linea,this.columna);
                    tabla.guardarActualizar(this.nueva_expresion.ejecutar(tabla),BUSCANDO_USANDO_NOMBRE_COMPUESTO)
                }
            }

        }
        
    }
    

    public graficar(): any {
        

        
        let padre =this.ID+"[label=\""+" MODIFICAR VEC 2D "+"\"] \n";
        let hijo1 =this.identificador.graficar()+" \n";
        let hijo2 =this.expresion_1.graficar()+" \n";
        let hijo3 =this.expresion_2.graficar()+" \n";
        let hijo4 =this.nueva_expresion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3+hijo4;

        retorno = retorno + this.ID+"->"+this.identificador.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion_1.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion_2.ID+"\n";
        retorno = retorno + this.ID+"->"+this.nueva_expresion.ID+"\n";
        
    }
    public imprimir(): any {
        
        console.log("Encontre un vecotr , nombre:"+this.identificador+" con expresion "+this.expresion_1 +this.expresion_2+this.nueva_expresion +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
        
    }
}