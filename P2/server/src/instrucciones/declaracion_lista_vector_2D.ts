import { Instruccion } from "../abstractas/instruccion";

export class DeclaracionListaVector_2D extends Instruccion {


    constructor(    
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public D2_a: string,
        public D2_b: string,
        public identificador: string,
        public lista_valores_1: string,
        public lista_valores_2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.D2_a +this.D2_b +this.identificador +this.lista_valores_1 +this.lista_valores_2 +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
    }
}