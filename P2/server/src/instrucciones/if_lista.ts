import { count } from "console";
import { Instruccion } from "../abstractas/instruccion";

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
    public ejecutar():any {

        
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        for(let elemento of this.lista){
            console.log(elemento.imprimir())
        }
        
    }
}