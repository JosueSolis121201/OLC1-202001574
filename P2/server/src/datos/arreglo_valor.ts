import { Valor } from "./valor";

export class ArregloValor {
    lista_valores: any;
    tipo: number;
    diccionario: any;

    constructor(
        lista_valores: Array<Valor>,
        tamaño:number,
        tipo: number,
        tipo_declaracion: number) {

        this.tipo = tipo;
        this.diccionario = {};
        let index = 0;
        for (const iterator of lista_valores) {
            this.diccionario["p"+index] = iterator;   
            index++;
        }





        
        /*diccionario["p0"] = 0;
        diccionario["p0s0"] = 0;
        diccionario["p0s0t3"] = 0;






        switch (tipo_declaracion) {
            case 1:
                switch (tipo) {
                    case 1:
                        for (let index = 0; index < tamaño; index++) {
                            diccionario["p"+index] = 0;
                        }
                        break;
                    default:
                        break;
                }

                break;
        
            default:
                break;
            }*/

    }




}