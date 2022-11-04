import { isObject } from "util";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Incremento extends Instruccion {


    constructor(
        public operacion: any,
        public signo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //incremento o decremento suma el valor de la variable en mas uno dependiendo el signo con que venga(++||--)
        let return_in_tabla=tabla.buscarVariable(this.operacion)
        if(this.signo=="++"){
            let new_valor = new Valor(return_in_tabla.obtenerValor()+1,return_in_tabla.tipo);
            // valor = su valor y tipo  , nombre = quien es
            tabla.guardarActualizar(new_valor,this.operacion);
        }else{
            let new_valor = new Valor(return_in_tabla.obtenerValor()-1,return_in_tabla.tipo);
            // valor = su valor y tipo  , nombre = quien es
            tabla.guardarActualizar(new_valor,this.operacion);
        }
       
      
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Incremento "+"\"] \n";
        let hijo1 = this.ID+"Increment"+"[label=\""+this.signo+"\"] \n";

        let retorno =""
        if(isNaN(this.operacion)){
            let hijo2 = this.ID+"OPERACION"+"[label=\""+this.operacion+"\"] \n";
            retorno = retorno +hijo2
        }else{
            let hijo2 =this.operacion.graficar()+" \n";
            retorno=retorno+hijo2
        }
       

        retorno = retorno+padre + hijo1;

        retorno = retorno + this.ID+"->"+this.ID+"Increment"+"\n";
        

        if(isNaN(this.operacion)){
            retorno = retorno + this.ID+"->"+this.ID+"OPERACION"+"\n";
           
        }else{
            retorno = retorno + this.ID+"->"+this.operacion.ID+"\n";
        }
        return retorno;

        
    }
    public imprimir(): any {
        console.log("Encontre una , nombre:"+this.operacion+" con expresion "+this.signo+" lo encontre en la linea "+this.line);
        
    }
}