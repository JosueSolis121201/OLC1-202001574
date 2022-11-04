import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Valores_list extends Instruccion {

    lista: Array<Instruccion>;
    constructor(valores: Instruccion,linea: number, columna:number) {
        super(linea,columna);
        this.lista=[valores];
    }
    
        

    public agregar( dato_valor:Instruccion):void {
        if (dato_valor!= null){
            this.lista.push(dato_valor);
        }
    //metodo para guardar la variable
    }
    public ejecutar(tabla:TablaSimbolos):any {
        let lista_nombres:any = []
        for (let elemento of this.lista){
            lista_nombres.push(elemento)

        }
        return lista_nombres
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" LIST VALORES"+"\"]\n";
        let retornar = padre;

        for(let elemto of this.lista){
           
            retornar = retornar + padre +elemto.graficar()+"\n"
            retornar = retornar +this.ID +"->"+elemto.ID+"\n"
        }
        return retornar;
    }
    public imprimir(): any {
        
    }
}