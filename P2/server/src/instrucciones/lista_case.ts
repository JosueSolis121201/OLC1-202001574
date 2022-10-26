import { Instruccion } from "../abstractas/instruccion";

export class Case_list extends Instruccion {

    public lista: Array<Instruccion>;

    constructor(linea: number, columna:number) {
        super(linea,columna);
        this.lista = [];
    }
    
        

    public agregar( dato_case:Instruccion):void {
        if (dato_case!= null){
            this.lista.push(dato_case);
        }
    //metodo para guardar la variable
    }
    public ejecutar():any {

        
    }
    public graficar(): any {
        
    }
    public imprimir(): any {
        for(let elemto of this.lista){
            console.log(elemto.imprimir())
        }
        
        
    }
}