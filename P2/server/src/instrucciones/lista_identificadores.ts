import { Instruccion } from "../abstractas/instruccion";

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
    public ejecutar():any {

        
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Identificadores "+"\"]\n";
        let retornar = "";
        let hijo ="";

        for(let elemto of this.lista){
            hijo= this.ID+"[label=\""+elemto+"\"]\n";
            retornar = retornar + padre +hijo
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