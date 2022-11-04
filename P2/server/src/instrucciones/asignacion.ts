import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Asignacion extends Instruccion {
    linea:any
    columna:any

    constructor(
        public identificadores: Instruccion,
        public expresion: Instruccion,
        linea: number, columna:number) {
        super(linea,columna);
        this.linea = linea
        this.columna = columna
    }

    public ejecutar(tabla:TablaSimbolos):any {
        //lista de identificadores
        let lista:Array<string> =this.identificadores.ejecutar(tabla) 
        //elemto = identificador
        for(let elemto of lista){
            let val_g = this.expresion.ejecutar(tabla);
            let new_valor = new Valor(val_g.obtenerValor(),val_g.tipo,this.linea,this.columna);
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