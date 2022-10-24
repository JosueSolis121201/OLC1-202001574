import { Instruccion } from "../abstractas/instruccion";

export class Valores_list extends Instruccion {

    public lista: Array<Instruccion>;

    constructor(linea: number, columna:number) {
        super(linea,columna);
        this.lista = [];
    }
    
        

    public agregar( dato_valor:Instruccion):void {
        if (dato_valor!= null){
            this.lista.push(dato_valor);
        }
    //metodo para guardar la variable
    }
    public ejecutar():any {

    }
}