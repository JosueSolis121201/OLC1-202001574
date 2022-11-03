import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";
import { Case } from "./case";

export class Switch extends Instruccion {


    constructor(
        public Operacion_booleana: Instruccion,
        public case_list: Instruccion,
        public default_switch: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {

        //se obtiene la expresion que se valuara
        let ope:Valor = this.Operacion_booleana.ejecutar(tabla);
        // si no tipo booleano entra
            //valor else es el retorno de la tabla de elif
            // elif es una lista por ende recorrer lista
            let valorElse = false;
            let iterador:Array<Case> = this.case_list.ejecutar(tabla);
            
            for (let elemento of iterador){        //tabla case??
                if (ope.valor == elemento.Operacion_booleana.ejecutar(tabla).valor){
                    valorElse = true;
                    let instru_case:Array<Instruccion> = elemento.instrucciones.ejecutar(tabla);
                    for (let inst of  instru_case) {
                        inst.ejecutar(new TablaSimbolos("case",tabla));
                    }

                }
            }
            if( !valorElse ){
                //else ejecutar su return de tabla     // tabla default???
                if(this.default_switch != null){

                let instru_default:Array<Instruccion> = this.default_switch.ejecutar(tabla);
                    for (let inst of  instru_default) {
                        inst.ejecutar(new TablaSimbolos("DEFAULT",tabla));
                    }
                
                }else{
                    console.log("no se encontro default: TERMINO switch")
                }
            }
            
        

     
       
        
    
    }








    public graficar(): any {
        
        if (this.default_switch != null) 
        {

        let padre =this.ID+"[label=\""+" SWITCH "+"\"] \n";
        let hijo1 = this.ID+"OPBBOL"+"[label=\""+this.Operacion_booleana+"\"] \n";
        let hijo2 =this.case_list.graficar()+" \n";
        let hijo3 =this.default_switch.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.ID+"OPBBOL"+"\n";
        retorno = retorno + this.ID+"->"+this.case_list.ID+"\n";
        retorno = retorno + this.ID+"->"+this.default_switch.ID+"\n";
        return retorno;
        }else{

        let padre =this.ID+"[label=\""+" IF "+"\"] \n";
        let hijo1 =this.Operacion_booleana.graficar()+" \n";
        let hijo2 =this.case_list.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.Operacion_booleana.ID+"\n";
        retorno = retorno + this.ID+"->"+this.case_list.ID+"\n";
        return retorno;
        }
    }
    public imprimir(): any {
        


       
        if (this.default_switch != null) 
        {
            console.log("Encontre una SWTCH, tipo:"+this.Operacion_booleana+" nombre:"+this.case_list+" con expresion "+this.default_switch+" lo encontre en la linea "+this.line);
        } 
        else 
        {
            console.log("ELSE");
            console.log("Encontre una SWTCH, tipo:"+this.Operacion_booleana+" nombre:"+this.case_list+" con expresion "+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
        
    }
}