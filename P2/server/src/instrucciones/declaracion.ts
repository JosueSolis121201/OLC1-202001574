import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Declaracion extends Instruccion {


    constructor(
        public tipo: Instruccion,
        public identificador: Instruccion,
        public expresion: any,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        
    }
    public graficar(): any {
        
        let padre =this.ID+"[label=\""+" Declaracion "+"\"] \n";
        let hijo1 = this.ID+"AAA"+"[label=\""+this.tipo+"\"] \n";
        let hijo2= this.identificador.graficar()
        let hijo3=""

        if(this.expresion != ";" ){
            hijo3=this.expresion.graficar()
        }
    

        let retorno = padre+hijo1+hijo2+hijo3
        retorno = retorno +this.ID +"->"+this.ID+"AAA" +"\n"
        retorno = retorno +this.ID +"->"+this.identificador.ID+"\n"
        if(this.expresion != ";" ){
            retorno = retorno +this.ID +"->"+this.expresion.ID+"\n"
        }
        

        return retorno;

       
        
    }
    public imprimir(): any {
        
        this.identificador.imprimir();

        if (this.expresion != null) 
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificador+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        }
        else
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificador+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
        
    }
}