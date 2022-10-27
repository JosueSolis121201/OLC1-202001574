import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";
import { If_lista } from "./if_lista";

export class If extends Instruccion {


    constructor(
        public Operacion_booleana: Instruccion,
        public instrucciones: Instruccion,
        public elif: If_lista,
        public else_if: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {

        let ope:Valor = this.Operacion_booleana.ejecutar(tabla);
        if( ope.tipo != 4){
            console.log({error:"se esparaba bool en el if"})
            return ;
        }

        if(ope.valor){
            this.instrucciones.ejecutar(tabla);
        }else{
            let valorElse = this.elif.ejecutar(tabla);
            if( !valorElse ){
                this.else_if.ejecutar(tabla);
            }
        }
       
        
    }
    public graficar(): any {
        if (this.else_if != null) 
        {

        let padre =this.ID+"[label=\""+" IF "+"\"] \n";
        let hijo1 =this.Operacion_booleana.graficar()+" \n";
        let hijo2 =this.instrucciones.graficar()+" \n";
        let hijo3 =this.elif.graficar()+" \n";
        let hijo4 =this.else_if.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3+hijo4;

        retorno = retorno + this.ID+"->"+this.Operacion_booleana.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        retorno = retorno + this.ID+"->"+this.elif.ID+"\n";
        retorno = retorno + this.ID+"->"+this.else_if.ID+"\n";
        return retorno;
        }else{

        let padre =this.ID+"[label=\""+" IF "+"\"] \n";
        let hijo1 =this.Operacion_booleana.graficar()+" \n";
        let hijo2 =this.instrucciones.graficar()+" \n";
        let hijo3 =this.elif.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.Operacion_booleana.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        retorno = retorno + this.ID+"->"+this.elif.ID+"\n";
        return retorno;
            

        }
        
    }
    public imprimir(): any {
        if (this.else_if != null) 
        {
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+" con expresion "+this.elif+this.else_if+" lo encontre en la linea "+this.line);
        }
        else 
        {
            console.log("ELSE");
            console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+" con expresion "+this.elif+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
        
    }
}