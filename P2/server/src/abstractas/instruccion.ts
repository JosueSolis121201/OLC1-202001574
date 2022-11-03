import  GEN  from "../datos/IDS";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export abstract class Instruccion{
    //atributos

    ID:string;

    constructor(public line: number, public column: number) {
        this.line = line;
        this.column = column;
        this.ID = GEN.Generador.GenerarID();
    }
    
    public abstract ejecutar(tabla:TablaSimbolos):any;

    public abstract graficar():String;

    public abstract imprimir():String;

    public verObjeto(inst:any){
        console.log({tipo: typeof(inst), string: JSON.stringify(inst) })
    }

    public esMetodo(){
        return false;
    }

    public esFuncion(){
        return false;
    }

    public  generarId(){
        return this.ID;
    }

    public EsRetorno(){
        return false;
    }

    public EsBreak(){ 
        return false;
    }

    public EsContinue(){ 
        return false;
    }
}