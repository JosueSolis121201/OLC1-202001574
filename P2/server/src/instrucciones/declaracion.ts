import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class Declaracion extends Instruccion {


    constructor(
        public tipo: any,
        public identificadores: Instruccion, 
        public expresion: any,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        console.log("pasando por declaracion")
        // un valor por funcion
        let lista:[string] =this.identificadores.ejecutar(tabla)
        // guarlo en la tabla
        for(let elemto of lista){
            // valor y variable                             valor
            console.log("-------------------------------------")
            console.log(this.tipo)
            console.log(("-------------------------------------"))
            if (this.expresion != ";"){
                let retorno_tabla =  tabla.guardarVariable(this.expresion.ejecutar(tabla),elemto) 
            }else{
                let  tipo_encontrado;
                let valor_encontrado;
                switch (this.tipo.toLowerCase()) { 
                    case "int"://INT
                        tipo_encontrado=1;
                        valor_encontrado =0;
                        break;
                    case "double": //FLOAT
                        tipo_encontrado=2;
                        valor_encontrado =0;
                        break;
                    case "string"://STRING
                        tipo_encontrado=3;
                        valor_encontrado ="";
                        break;
                    case "boolean": //BOOL
                    
                        tipo_encontrado=4;
                        valor_encontrado =false
                        break;
                    case "char"://CHAR
                        tipo_encontrado=5;
                        valor_encontrado ='';
                        break;
                    default:
                        console.log({error:"ERROR EN Casteo"})
                        tipo_encontrado=1
                        valor_encontrado =0
                        break;
                }



                let valor= new Valor(valor_encontrado,tipo_encontrado)
                let retorno_tabla =  tabla.guardarVariable(valor,elemto) 
            }

            
        } 
        // fin (sin return)
    }
    public graficar(): any {
        
        
        let padre =this.ID+"[label=\""+" Declaracion "+"\"] \n";
        let hijo1 = this.ID+"AAA"+"[label=\""+this.tipo+"\"] \n";
        let hijo2= this.identificadores.graficar()
        let hijo3=""
        if(this.expresion != ";" ){
            hijo3=this.expresion.graficar()
        }
    

        let retorno = padre+hijo1+hijo2+hijo3
        retorno = retorno +this.ID +"->"+this.ID+"AAA" +"\n"
        retorno = retorno +this.ID +"->"+this.identificadores.ID+"\n"
        if(this.expresion != ";" ){
            retorno = retorno +this.ID +"->"+this.expresion.ID+"\n"
        }
        

        return retorno;

       
        
    }
    public imprimir(): any {
        
        this.identificadores.imprimir();

        if (this.expresion != null) 
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificadores+" con expresion "+this.expresion+" lo encontre en la linea "+this.line);
        }
        else
        {
            console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.identificadores+"lo encontre en la linea "+this.line);
        }
       
        //metodo para guardar la variable
        
    }
}