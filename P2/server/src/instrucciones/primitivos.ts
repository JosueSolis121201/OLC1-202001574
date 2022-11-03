import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Primitivos extends Instruccion {


    constructor(
        public valor: Valor,
        linea: number, columna:number) {
        super(linea,columna);

    }

    public ejecutar(tabla:TablaSimbolos):any { 
        if (this.valor.tipo==6)
        {
            let valorvariabl:Valor = tabla.buscarVariable(this.valor.obtenerValor());
            let nombreVar = valorvariabl.obtenerValor();
            if(valorvariabl){   
                return new Valor(nombreVar,valorvariabl.tipo);
            }
            else{
                console.log({error: `Variable ${nombreVar} no encontrada`})
            }
           
        }
        return new Valor(this.valor.obtenerValor(),this.valor.tipo);
    }
    public graficar(): any {
        let valStr:string = this.valor.obtenerValor().toString();
        
        let retornar =this.ID+"[label=\""+" Primitivo: " + valStr.replace("\"","").replace("\"","") +"\"] \n";
        retornar= retornar 
        return retornar;

    } 

    public imprimir(): any {
       
    }

    public valorObtenido(): any {
        let valStr:Valor = this.valor.obtenerValor().toString();
        return(valStr)
        
    }
}