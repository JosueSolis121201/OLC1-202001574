import { Instruccion } from "../abstractas/instruccion";

export class DeclaracionListaVector_1D extends Instruccion {


    constructor(    
        public tipo: string,
        public D1_a: string,
        public D1_b: string,
        public identificador: string,
        public lista_valores: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            console.log("Encontre un vecotr , nombre:"+this.tipo+" con expresion "+this.D1_a +this.D1_b +this.identificador +this.lista_valores +" lo encontre en la linea "+this.line);
    
       
        //metodo para guardar la variable
    }
}