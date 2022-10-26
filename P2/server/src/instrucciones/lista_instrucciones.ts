import { Instruccion } from "../abstractas/instruccion";

export class Instrucciones_list extends Instruccion {

    lista: Array<Instruccion>;

    constructor(estructura: Instruccion,linea: number, columna:number) {
        super(linea,columna);
        this.lista = [estructura]
    }
    
        

    public agregar( dato_instruccion:Instruccion):void {
        if (dato_instruccion!= null){
            this.lista.push(dato_instruccion);
        }
    //metodo para guardar la variable
    }
    public ejecutar():any {

    }
    public graficar(): any {
        let string = ""
        for (let instruccion of this.lista)
        {
            string = string + instruccion.graficar();
        }
        
        return string;
        
    }

    public imprimir(): any {
        
        for(let elemto of this.lista){
            console.log(elemto.imprimir())
        }
        
        
    }
}