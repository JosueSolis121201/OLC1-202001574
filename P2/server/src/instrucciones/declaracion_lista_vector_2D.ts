import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class DeclaracionListaVector_2D extends Instruccion {


    constructor(    
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public D2_a: string,
        public D2_b: string,
        public identificador: any,
        public lista_valores_1: Instruccion,
        public lista_valores_2: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        console.log("pasando por declaracion lista de vector 2 dimencioens")

        // declarar guarda en tabla 
        let lista:[Valor] =this.lista_valores_1.ejecutar(tabla)
        // guarlo en la tabla
        let index = 0;
        //identificador
        let identi;
        for(let element of this.identificador.ejecutar(tabla)){ 
            identi = element
        }
        let tamaño1D=this.lista_valores_1.ejecutar(tabla).length
        let tamaño2D=this.lista_valores_2.ejecutar(tabla).length    
        


        let elementos_ambas_listas:any =[]

        for(let element of this.lista_valores_1.ejecutar(tabla)){
            elementos_ambas_listas.push(element.ejecutar(tabla))
        }

        for(let element of this.lista_valores_2.ejecutar(tabla)){
            elementos_ambas_listas.push(element.ejecutar(tabla))
        }
            
        let index_1D = 0;
        let index_2D = 0;
        let inedx=0;
        for (let i =0;i<tamaño1D;i++){
            for (let x =0;x<tamaño2D;x++){

            tabla.guardarVariable(elementos_ambas_listas[inedx],"arreglonero2"+identi+"s"+index_2D+"d"+index_1D);
            inedx++;
            index_1D++;
        }
        index_1D=0
        index_2D++;
       }
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