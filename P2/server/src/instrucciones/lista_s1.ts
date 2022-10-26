import { Instruccion } from "../abstractas/instruccion";

export class S1_list extends Instruccion {

    lista: Array<Instruccion>;

    constructor(s1: Instruccion,linea: number, columna:number) {
        super(linea,columna);
        this.lista = [s1]
        
        
    }
    
        

    public agregar( dato_s1:Instruccion):void {
        
        if (dato_s1!= null){
            this.lista.push(dato_s1);
        }
        
    //metodo para guardar la variable
    }
    public ejecutar():any {
    }
    public graficar(): any {
        console.log("++++++++++++++++++")
        let string = ""
        for (let instrucion of this.lista){
            string = string + instrucion.graficar()
        }
        
        return(string)
        
    }
    public imprimir(): any {
        for(let elemto of this.lista){
            console.log(elemto.imprimir())
        }
        
    }
}