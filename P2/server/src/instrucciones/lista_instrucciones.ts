import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

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
    public ejecutar(tabla:TablaSimbolos):any {

    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" INSTRUCCIONES"+"\"]\n";
        let retornar = padre;

        for(let elemto of this.lista){
           
            retornar = retornar + padre +elemto.graficar()+"\n"
            retornar = retornar +this.ID +"->"+elemto.ID+"\n"
        }

        return retornar;
        
        
    }

    public imprimir(): any {
        
        for(let elemto of this.lista){
            console.log(elemto.imprimir())
        }
        
        
    }
}