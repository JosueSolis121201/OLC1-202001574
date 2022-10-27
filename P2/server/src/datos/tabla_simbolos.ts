import {Valor} from "./valor"

export class TablaSimbolos {
    diccionario:any;
    registro:any;

    tablaPadre:TablaSimbolos;

    constructor(padre:TablaSimbolos,contexto:string) {
        this.diccionario = { };
        this.registro = { };
        this.tablaPadre = padre;
    }
    public guardarVariable(valor:Valor,nombre:string){
        if (this.diccionario[nombre]==null){
            this.diccionario[nombre] = valor;
        }else{
            console.log({error: "ERROR variable ya guardada con ese nombre"})
        }
    }

    public buscarVariable(nombre:string){
        let ptrInicial:any = this;
        while (ptrInicial != null) {
            if (ptrInicial.diccionario[nombre]==null){
                console.log({error: "ERROR variable no guardada con ese nombre"})
            }else{
                return ptrInicial.diccionario[nombre];
            }
            ptrInicial = ptrInicial.tablaPadre 
        }
            
    }
}