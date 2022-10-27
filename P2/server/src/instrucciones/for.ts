import { IpcSocketConnectOpts } from "net";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class For extends Instruccion {


    constructor(
        public expresion: Instruccion,
        public condicion: Instruccion,
        public actualizacion: Instruccion,
        public instrucciones: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
        /*for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }*/
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" FOR "+"\"] \n";
        let hijo1 =this.expresion.graficar()+" \n";
        let hijo2 =this.condicion.graficar()+" \n";
        let hijo3 =this.actualizacion.graficar()+" \n";
        let hijo4 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+ hijo3+ hijo4;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.condicion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.actualizacion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una FOR, nombre:"+this.expresion+" con expresion "+this.condicion+this.actualizacion+this.instrucciones+" lo encontre en la linea "+this.line);
    }
}