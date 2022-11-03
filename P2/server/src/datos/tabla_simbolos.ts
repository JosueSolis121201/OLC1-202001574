import { Instruccion } from "../abstractas/instruccion";
import {Valor, Symbol2} from "./valor"

export class TablaSimbolos {
    diccionario:any;
    registro:any;
    diccionario_funcion:any
 
    tablaPadre?:TablaSimbolos;

    constructor(contexto:string,padre?: TablaSimbolos) { ///
        // diccionario donde se guarda todo
        this.diccionario = { };
        // no se ha usado
        this.registro = { };
        // punteros para lista simple enlazada
        this.tablaPadre = padre;  
        // diiciconario para funciones y metodos
        this.diccionario_funcion ={};
    }
    public guardarVariable(valor:Valor,nombre:string){
        if (this.diccionario[nombre]==null){
            this.diccionario[nombre] = valor;
        }else{
            console.log({error: "ERROR variable ya guardada con ese nombre " + nombre})
        }
    }



    //Metodo guardar
    public guardarFuncionMetodo(inat:Instruccion,nombre:string){
        if (this.diccionario_funcion[nombre]==null){
            this.diccionario_funcion[nombre] = inat;
        }else{
            console.log({error: "ERROR Metodo o Funcion ya guardada con ese nombre " + nombre})
        }
    }


            //busa el metodo instruccion que le mande y lo guarda en tabla
    public buscarMetodoFuncion(nombre:string):Instruccion{
        let ptrInicial:any = this;
        while (ptrInicial != null) {
            //tabla padre , MetodoFuncion.ejecutar(this.tablaPadre) nombre de la funcion
            if (!(ptrInicial.diccionario_funcion[nombre]==null)){
                return ptrInicial.diccionario_funcion[nombre];
            }
            //punterios                           
            ptrInicial = ptrInicial.tablaPadre!;
        }
        console.log({error: "ERROR  Metodo o Funcion no guardada con ese nombre " + nombre})
        let retorno:any = null 
        return retorno;
    }


    public guardarActualizar(valor:Valor,nombre:string){
        let ptrInicial:any = this;
        while (ptrInicial != null) {
            // apunta a diccionario de puntero
            let dict = ptrInicial.diccionario;
            if (dict[nombre]!=null){
                dict[nombre] =  valor;
                return valor;
            }
            ptrInicial = ptrInicial.tablaPadre;
        }
        console.log({error: "ERROR variable no encontrada para actualizar con ese nombre " + nombre})
    }


    public buscarVariable(nombre:string):Valor{
        let ptrInicial:any = this;
        while (ptrInicial != null) {
            if (!(ptrInicial.diccionario[nombre]==null)){
                return ptrInicial.diccionario[nombre];
            }
            ptrInicial = ptrInicial.tablaPadre!;
        }
        console.log({error: "ERROR variable no guardada con ese nombre " + nombre})
        let retorno:any = null 
        return retorno;
            
    }
}