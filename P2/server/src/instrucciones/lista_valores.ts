import { Instruccion } from "../abstractas/instruccion";

export class Valores_list extends Instruccion {

    lista: Array<Instruccion>;
    constructor(valores: Instruccion,linea: number, columna:number) {
        super(linea,columna);
        this.lista=[valores];
    }
    
        

    public agregar( dato_valor:Instruccion):void {
        if (dato_valor!= null){
            this.lista.push(dato_valor);
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