import { IpcSocketConnectOpts } from "net";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Bloque extends Instruccion {


    constructor(
        public listaInstrucciones:Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {/*

        const newEnv = new TablaSimbolos(tabla);

        this.verObjeto(this.listaInstrucciones)
        console.log( this.listaInstrucciones)
        for (const instruccion of this.listaInstrucciones) {
            try {
                
                instruccion.ejecutar(newEnv);
            } catch (error) {
                console.log(error);
                
           }
        }
    */}





    public graficar(): any {
        
    }
    public imprimir(): any {
    }
}