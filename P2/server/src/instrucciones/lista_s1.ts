import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class S1_list extends Instruccion {

    lista: Array<Instruccion>;

    constructor(s1: Instruccion,linea: number, columna:number) {
        super(linea,columna);
        this.lista = [s1]
        
    }
    
        

    public agregar( dato_s1:Instruccion):void {
        
        if (dato_s1!= null){
            this.lista.push(dato_s1);
            
        }
        
    //metodo para guardar la variable
    }
    public ejecutar(tabla:TablaSimbolos):any {
        return this.lista
    }
    public graficar(): any {
            
        let retornar =this.ID+"[label=\""+" INICIO \"] \n";
        let string = retornar
        for (let instrucion of this.lista){
            string = string + instrucion.graficar()+"\n"
            string = string +this.ID +"->"+instrucion.ID
        }

        return string;
        
    }
    public imprimir(): any {
        
    }
}