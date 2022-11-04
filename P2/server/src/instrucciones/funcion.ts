import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Funcion extends Instruccion {


    constructor(
        public identificador: string,
        public parametros: any,
        public tipo: String,
        public instrucciones: Instruccion,
        linea: number, columna:number) { 
        super(linea,columna);
    }

    public esFuncion(): boolean {
        return true;
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //? this.identificador = nombre de la funcion 
        //? this.parametros = Declaracion en manera de parametros
        //? tipo = que tipo de dato es la funcion 
        //?  instruccion = instrucciones de la funcion

        let nueva_tabla = new TablaSimbolos("func",tabla)
        let lista_instruccion:[Instruccion] =this.instrucciones.ejecutar(nueva_tabla)
        // guarlo en la tabla
        for(let elemto of lista_instruccion){
            // valor y variable                             valor
            let valor_ejec=elemto.ejecutar(nueva_tabla)
            
            if (elemto.EsRetorno()==true){
                return valor_ejec
            }

        }
        
        console.log({error: "FUNCION SIN RETORNAR NADA"})
    }

    public iniciarVariables (tabla:TablaSimbolos): any{
        return this.parametros.ejecutar(tabla)
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
        
    }
}