import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Asignacion extends Instruccion {


    constructor(
        public identificadores: Instruccion,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        console.log("pasando por asignacion ")
        //lista de identificadores
        let lista:Array<string> =this.identificadores.ejecutar(tabla) 
        //elemto = identificador
        for(let elemto of lista){
            let val_g = this.expresion.ejecutar(tabla);
            console.log(val_g.valor)
            let new_valor = new Valor(val_g.obtenerValor(),val_g.tipo);
            tabla.guardarActualizar(new_valor,elemto);
            
        }
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" Asignacion "+"\"] \n";
        let hijo1 = this.identificadores.graficar();
        let hijo2 = this.expresion.graficar();

        let retornar = padre + hijo1 + hijo2+"\n";

        retornar =retornar+ this.ID+"->"+this.identificadores.ID+"\n"
        retornar = retornar+ this.ID +"->"+this.expresion.ID+"\n"

        retornar= retornar
        
        return retornar;
        
    }
    public imprimir(): any {
        
    }
}