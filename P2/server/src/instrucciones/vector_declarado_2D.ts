import { Instruccion } from "../abstractas/instruccion";

export class VectorDeclarado_2D extends Instruccion {


    constructor(
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public D2_a: string,
        public D2_b: string,
        public identificador: string,
        public new_tipo: string,
        public expresionD1: string,
        public expresionD2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        if(this.D2_a && this.D2_b != null){
            console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.D2_a +this.D2_b +this.identificador +this.new_tipo +this.expresionD1 +this.expresionD2 +" lo encontre en la linea "+this.line);

        }
        else{
            console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.identificador +this.new_tipo +this.expresionD1+" lo encontre en la linea "+this.line);
        }
      
        
       
        //metodo para guardar la variable
    }
}