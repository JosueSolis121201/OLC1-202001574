import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Primitivos extends Instruccion {
    linea:any
    columna:any

    constructor(
        public valor: Valor,
        linea: number, columna:number) {
        super(linea,columna);
        this.linea=linea
        this.columna=columna

    }

    public ejecutar(tabla:TablaSimbolos):any { 
        if (this.valor.tipo==6)
        {
            let valorvariabl:Valor = tabla.buscarVariable(this.valor.obtenerValor());
            let nombreVar = valorvariabl.obtenerValor();
            if(valorvariabl){   
                return new Valor(nombreVar,valorvariabl.tipo,this.linea,this.columna);
            }
            else{
                console.log({error: `Variable ${nombreVar} no encontrada`})
            }
           
        }
        return new Valor(this.valor.obtenerValor(),this.valor.tipo,this.linea,this.columna);
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