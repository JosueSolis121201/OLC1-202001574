import { count } from "console";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class If_lista extends Instruccion {

    public lista: Array<Instruccion>;

    constructor(linea: number, columna:number) {
        super(linea,columna);
        this.lista = [];
    }
    
        

    public agregar( dato_elif:Instruccion):void {
        if (dato_elif!= null){
            this.lista.push(dato_elif);
        }
    //metodo para guardar la variable
    }
    public ejecutar(tabla:TablaSimbolos):any {

        
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" LISTA ELIF "+"\"]\n";
        let retornar = "";
        let hijo ="";

        for(let elemto of this.lista){
            hijo= hijo+elemto.graficar();
            retornar = retornar + padre +hijo+"\n"
            retornar = retornar +this.ID +"->"+elemto.ID+"\n"
        }

        return retornar;
        
    }
    public imprimir(): any {
        for(let elemento of this.lista){
            console.log(elemento.imprimir())
        }
        
    }
}