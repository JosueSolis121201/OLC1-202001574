import { Instruccion } from "../abstractas/instruccion";

export class Parametros_list extends Instruccion {

    public lista: Array<Instruccion>;

    constructor(linea: number, columna:number) {
        super(linea,columna);
        this.lista = [];
    }
    
        

    public agregar( dato_parametro:Instruccion):void {
        if (dato_parametro!= null){
            this.lista.push(dato_parametro);
        }
    //metodo para guardar la variable
    }
    public ejecutar():any {

    }
}