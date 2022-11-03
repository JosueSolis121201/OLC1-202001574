import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";
import { If_lista } from "./if_lista";

export class If extends Instruccion {


    constructor(
        public Operacion_booleana: Instruccion,
        public instrucciones: any,
        public elif: If_lista,
        public else_if: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {

        //se obtiene operacion booleana para saber si se ejecutar
        let ope:Valor = this.Operacion_booleana.ejecutar(tabla);
        // si no tipo booleano entra
        if( ope.tipo != 4){
            // retorna error ya que se necesito un booleano
            console.log({error:"se esparaba bool en el if"})
            //retorna nada
            return ;
        }

        //si la operacion booleana es true entra
        if(ope.valor){
            // se crea un nuevo entorno con contexto tabla if
            // esto es una lista usar for
            for(let elemento of this.instrucciones.ejecutar(tabla)){
            // por elemento de la lista se crea un nuevo entorno
            //! !!!!!!!!!!!!!
            // entornos
            /*
            int x = 10; entorno: goblal
            if (20 <50)
            {
            x = 2; entorno: tablaif 
            }
            salida x = 2 ya que se cambio dentro de entorno
            */
            //! !!!!!!!!!!!!!
            // para entrono if
            let guardar = elemento.ejecutar(new TablaSimbolos("TablaIf",tabla));
            }
             


        // si no
        }else{
            //valor else es el retorno de la tabla de elif
            // elif es una lista por ende recorrer lista
            let valorElse = false;
            let iterador = this.elif.ejecutar(tabla);
            for (let elemento of iterador){        //tabla el_if??
                valorElse = elemento.ejecutar(tabla);
                // valor else(retorno de tabla elif)== false
                
            }
            if( !valorElse ){
                //else ejecutar su return de tabla     // tabla else???
                
                if(this.else_if != null){
                this.else_if.ejecutar(new TablaSimbolos("TablaIf",tabla));
                }else{
                    console.log("no se encontro else: TERMINO IF")
                }
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