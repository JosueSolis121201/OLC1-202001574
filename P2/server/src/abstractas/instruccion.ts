import  GEN  from "../datos/IDS";

export abstract class Instruccion{
    //atributos

    ID:string;

    constructor(public line: number, public column: number) {
        this.line = line;
        this.column = column;
        this.ID = GEN.Generador.GenerarID();
    }
    
    public abstract ejecutar():any;

    public abstract graficar():String;

    public abstract imprimir():String;

    public verObjeto(inst:any){
        console.log({tipo: typeof(inst), string: JSON.stringify(inst) })
    }

    public  generarId(){
        return this.ID;
    }
}