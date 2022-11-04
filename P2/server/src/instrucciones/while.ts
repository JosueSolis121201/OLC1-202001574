import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class While extends Instruccion {


    constructor(
        public expresion: Instruccion,
        public instruccion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        // se basa en cumplir una operacion boleana que se ejecuta hasta que deje de ser true
        //se obtiene operacion booleana para saber si se ejecutar
        let ope:Valor = this.expresion.ejecutar(tabla);
        // si no tipo booleano entra
        if( ope.tipo != 4){
            // retorna error ya que se necesito un booleano
            console.log({error:"se esparaba bool en el while"})
            //retorna nada
            return ;
        }
        // operacion boleana true 
        while(ope.valor){
            // Ya hay un entorno para Instruccion while
            let instru_while:Array<Instruccion> = this.instruccion.ejecutar(tabla);
            for (let inst of  instru_while) {
                inst.ejecutar(new TablaSimbolos("while",tabla));
            }
            ope = this.expresion.ejecutar(tabla);
    }



    }
    public graficar(): any {

        
        let padre =this.ID+"[label=\""+" WHILE "+"\"] \n";
        let hijo1 =this.expresion.graficar()+" \n";
        let hijo2 =this.instruccion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instruccion.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        
      
        console.log("Encontre una WHILE, nombre:"+this.expresion+" con expresion "+this.instruccion+" lo encontre en la linea "+this.line);
        
       
        //metodo para guardar la variable
        
    }
}