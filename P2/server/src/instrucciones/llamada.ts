import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";
import { Metodo } from "./metodo";

export class Llamada extends Instruccion {


    constructor(
        public identificador: string,
        public argumentos: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {  
        //La llamada a una función devuelve un resultado que ha de ser recogido, bien asignándolo a una variable del tipo adecuado, bien integrándolo en una expresión.
        // buscar el nombre el metodo o funcion
        let metodo_funcion:any=tabla.buscarMetodoFuncion(this.identificador)

        //lista de argumentos
        let lista_arg:Array<any> =this.argumentos.ejecutar(tabla)

        // nuevo entorno
        let nueva_tabla = new TablaSimbolos("Tabla variable",tabla)
        

        //lista de valores desde funcion o metodo
        let nombre_param_lista = metodo_funcion.iniciarVariables(nueva_tabla) 
        

        //recorriendo lista de parametros desde funcion o metodo
        let pos =0;
        
        for(let element of nombre_param_lista ){
            if(nombre_param_lista.length ==lista_arg.length ){
                nueva_tabla.guardarActualizar(lista_arg[pos].valor,nombre_param_lista[pos])
            }else{
                console.log("Las listas de argumento y parametros no son iguales")
            }
            //se guarda cada pos con el nombre de la funcion
            pos=pos+1;
        }
        metodo_funcion.ejecutar(nueva_tabla);
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" LLAMADA "+"\"] \n";
        let hijo1 = this.ID+"LLAR"+"[label=\""+this.identificador+"\"] \n";
        let hijo2 =this.argumentos.graficar()+" \n";

        let retorno = padre + hijo1 + hijo2;

        retorno = retorno + this.ID+"->"+this.ID+"LLAR"+"\n";
        retorno = retorno + this.ID+"->"+this.argumentos.ID+"\n";
        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una METODO, nombre:"+this.identificador+this.argumentos+" con expresionlo encontre en la linea "+this.line);
        
    }
}