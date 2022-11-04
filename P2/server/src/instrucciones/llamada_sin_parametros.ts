import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class LlamadaSinParametros extends Instruccion {


    constructor(
        public identificador: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //La llamada a una función devuelve un resultado que ha de ser recogido, bien asignándolo a una variable del tipo adecuado, bien integrándolo en una expresión.
        // buscar el nombre el metodo o funcion

        let busqueda_tabla=tabla.buscarMetodoFuncion(this.identificador)
        return busqueda_tabla.ejecutar(new TablaSimbolos(this.identificador,tabla) );
        
            
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" LLAMADA SIN PARAMETROS "+"\"] \n";
        let hijo1 = this.ID+"PARAMETROS"+"[label=\""+this.identificador+"\"] \n";

        let retorno = padre + hijo1 ;

        retorno = retorno + this.ID+"->"+this.ID+"PARAMETROS"+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        
    }
}