import { Instruccion } from "../abstractas/instruccion";

export class Identificadores_lista extends Instruccion {

    public lista: Array<String>;

    constructor(linea: number, columna:number) {
        super(linea,columna);
        this.lista = [];
    }
    
        

    public agregar( identificador:String):void {
        if (identificador!= null){
            this.lista.push(identificador);
        }
    }
    public ejecutar():any {

        
    }
}