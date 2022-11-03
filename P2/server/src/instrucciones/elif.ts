import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Elif extends Instruccion {


    constructor(
        public Operacion_booleana: Instruccion,
        public instrucciones: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {

        let ope:Valor = this.Operacion_booleana.ejecutar(tabla);
        //se espera que operador booleano sea un return booleano( true o false)
        if( ope.tipo != 4){
            console.log({error:"se esparaba bool en el elif"})
            return ;
        }
        //si el booleano es true se crea nuevo ambiuente con contexto tabla elif
        if(ope.valor){
                // Ya hay un entorno para elif desde if
            let instru_elif:Array<Instruccion> = this.instrucciones.ejecutar(tabla);
            for (let inst of  instru_elif) {
                inst.ejecutar(new TablaSimbolos("TablaIf",tabla));
            }
            // return instruccion elif para if
            return  true
        }
        return false;
    }
            
        
        
    



    public graficar(): any {
        let padre =this.ID+"[label=\""+" ELIF "+"\"] \n";
        let hijo1 =this.Operacion_booleana.graficar()+" \n";
        let hijo2 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.Operacion_booleana.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una IF, tipo:"+this.Operacion_booleana+" nombre:"+this.instrucciones+"lo encontre en la linea "+this.line);
        
    }
}