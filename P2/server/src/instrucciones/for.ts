import { IpcSocketConnectOpts } from "net";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

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

        //for recomendacion trabajarlo como while
        //condicional 
        let nueva_tabla  = new TablaSimbolos ("tabla for",tabla)

        this.expresion.ejecutar(nueva_tabla)
        let boleano =this.condicion.ejecutar(nueva_tabla)
     
        //VER TIPOconsole.log({bool:boleano})
       // mientras la condicionar sea t ru hacer el while
       while(boleano.valor){
        // ahcer instruccion de for
        let instru_while:Array<Instruccion> = this.instrucciones.ejecutar(nueva_tabla);
            
            for (let inst of  instru_while) {
                inst.ejecutar(nueva_tabla); 
            }
            //incremental
            this.actualizacion.ejecutar(nueva_tabla)
            boleano =this.condicion.ejecutar(nueva_tabla)
       } 


        

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
    }
}