import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

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
    public ejecutar(tabla:TablaSimbolos):any {

    }
    public graficar(): any {
        
        
       let padre =this.ID+"[label=\""+" LIST PARAMETROS"+"\"]\n";
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