import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

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
    public ejecutar(tabla:TablaSimbolos):any {
        return this.lista

        
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" LISTA CASE "+"\"]\n";
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