import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class DoUntil extends Instruccion {
    constructor(    
        public instruccion: Instruccion,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //al ser do - while primero se ejecuta sus intrucciones y luego se ejecuta su boolean para comprobar si se repite
        let instru_while:Array<Instruccion> = this.instruccion.ejecutar(tabla);
            for (let inst of  instru_while) {
                inst.ejecutar(new TablaSimbolos("while",tabla));
        }
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
        
        while(!(ope.valor)){
            // Ya hay un entorno para Instruccion while
            let instru_while:Array<Instruccion> = this.instruccion.ejecutar(tabla);
            for (let inst of  instru_while) {
                inst.ejecutar(new TablaSimbolos("while",tabla));
            }
            //comprobacion de nuevo para continuar el ciclo while-do while
            ope = this.expresion.ejecutar(tabla);
    }



    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" DO UNTIL "+"\"] \n";
        let hijo2 =this.expresion.graficar()+" \n";
        let hijo1 =this.instruccion.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.instruccion.ID+"\n";
        retorno = retorno + this.ID+"->"+this.expresion.ID+"\n";
        
        return retorno;
        
    }
    public imprimir(): any {
        
    }
}