import { Instruccion } from "../abstractas/instruccion";

export class OperacionBinaria extends Instruccion {


    constructor(
        public izquierdo: string,
        public derecho: string,
        public signo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        
        //metodo para guardar la variable
    }
    public graficar(): any {
        let padre =this.ID+"[label=\""+" Operadores "+"\"] ->";
        let retornar = ""
        retornar = retornar+padre+this.ID+"[label=\""+this.izquierdo+"\"] \n";
        retornar = retornar+padre+this.ID+"[label=\""+this.signo+"\"] \n";
        retornar = retornar+padre+this.ID+"[label=\""+this.derecho+"\"] \n";
        console.log(retornar)
        return retornar;
        
    }
    public imprimir(): any {
        console.log("Encontre una operacion binaria, tipo:"+this.izquierdo+" nombre:"+this.signo+" lo encontre en la linea "+this.derecho);
    }
}