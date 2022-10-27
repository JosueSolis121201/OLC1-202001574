import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Identificadores_lista extends Instruccion {
    lista: Array<String>; 
    constructor( identificador:String,
        linea: number, 
        columna:number) {
        super(linea,columna);
        this.lista=[identificador]
        
    }
    
        

    public agregar( identificador:String):void {
        if (identificador!= null){
            this.lista.push(identificador);
            console.log(this.lista)
        }
    }
    public ejecutar(tabla:TablaSimbolos):any {

        
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Identificadores "+"\"]\n";
        let retornar = "";
        let hijo ="";
        let contar =9

        for(let elemto of this.lista){
            contar = contar +1
            hijo= hijo+this.ID+"EEE"+contar+"[label=\""+elemto+"\"]\n";
            retornar = retornar + padre +hijo+"\n"
            retornar = retornar +this.ID +"->"+this.ID+"EEE"+contar+"\n"
        }

        return retornar;
        
    }
    public imprimir(): any {
        console.log("------------------------------")
        for(let elemento of this.lista){
            console.log(elemento)
        }
        
        
    }
}