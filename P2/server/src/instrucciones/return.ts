import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";

export class Return extends Instruccion {


    constructor(
        public expresion: any,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
      
          
        
       
        //metodo para guardar la variable
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" RETUNR "+"\"] \n";
        let hijo3= ""

        if(this.expresion != ";" ){
            hijo3=this.expresion.graficar()
        }
    

        let retorno = padre+hijo3


        if(this.expresion != ";" ){
            retorno = retorno +this.ID +"->"+this.expresion.ID+"\n"
        }
        

        return retorno;
        
    }
    public imprimir(): any {
        console.log("Encontre una Return, nombre:"+this.expresion+" con expresion "+" lo encontre en la linea "+this.line);
        
    }
}