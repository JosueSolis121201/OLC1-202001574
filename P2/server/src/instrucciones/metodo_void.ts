import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class MetodoVoid extends Instruccion {


    constructor(
        public identificador: string,
        public parametros: Instruccion,
        public voidd: string,
        public instrucciones: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //? this.identificador = nombre de la metodo 
        //? this.parametros = Declaracion en manera de parametros
        //?  instruccion = instrucciones de la funcion


        // crear nuevo entrono
        let nueva_tabla = new TablaSimbolos("func",tabla)
        //instruccion es una lista
        let lista_instruccion:[Instruccion] =this.instrucciones.ejecutar(nueva_tabla)
        // guarlo en la tabla
        //recorre la lista
        for(let elemto of lista_instruccion){
            // valor y variable                             valor
            let valor_ejec=elemto.ejecutar(nueva_tabla)
        }
        
        console.log({info: "FIN METODO"})
    }

    public esMetodo(): boolean {
        return true
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" METODO CON VOID "+"\"] \n";
        let hijo1 = this.ID+"MVOID"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 =this.parametros.graficar()+" \n";
        let hijo3 =this.instrucciones.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2+hijo3;

        retorno = retorno + this.ID+"->"+this.ID+"MVOID"+"\n";
        retorno = retorno + this.ID+"->"+this.parametros.ID+"\n";
        retorno = retorno + this.ID+"->"+this.instrucciones.ID+"\n";
        return retorno;
    }
    public imprimir(): any {
        
    }
}