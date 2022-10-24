import {Valor} from "./valor"

export class TablaSimbolos {
    diccionario:any;

    constructor() {
        this.diccionario = { };
    }
    public guardarVariable(valor:Valor,nombre:string){
        if (this.diccionario[nombre]==null){
            this.diccionario[nombre] = valor;
        }else{
            console.log({error: "ERROR variable ya guardada con ese nombre"})
        }
    }

    public buscarVariable(nombre:string){
        if (this.diccionario[nombre]==null){
            console.log({error: "ERROR variable no guardada con ese nombre"})
        }else{
            return this.diccionario[nombre];
        }
    }
}