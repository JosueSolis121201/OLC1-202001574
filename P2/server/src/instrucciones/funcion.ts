import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Funcion extends Instruccion {


    constructor(
        public identificador: String,
        public parametros: Instruccion,
        public tipo: String,
        public instrucciones: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {

        
      
           
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Funcion "+"\"] \n";
        let hijo1 = this.ID+"FUNC"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 = this.ID+"FUNCI"+"[label=\""+this.tipo+"\"] \n";
        let hijo3 =this.parametros.graficar()+" \n";
        let hijo4 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo1 + hijo3+hijo2+hijo4;

        retorno = retorno + this.ID+"->"+this.ID+"FUNC"+"\n";
        retorno = retorno + this.ID+"->"+this.parametros.ID+"\n";
        retorno = retorno + this.ID+"->"+this.ID+"FUNCI"+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una FUNCION, nombre:"+this.identificador+this.parametros+" con ex"+this.tipo+"presion "+this.instrucciones+" lo encontre en la linea "+this.line);
        
    }
}