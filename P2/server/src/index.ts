import { count } from "console";
import { S1_list } from "./instrucciones/lista_s1";

const parser = require("./grammar/grammar");
const fs = require("fs");



try {
    const entrada = fs.readFileSync("src/entrada.txt");
    const ast:S1_list = parser.parse(entrada.toString());
    
    const ast_list = ast.lista;
    let padre ="inicio"+"[label=\""+" S0 \"] \n";
    let string =padre
    console.log({ast:ast})
    
     for (const instruccion of ast_list) {
        string = string +instruccion.graficar()+"\n"
        string = string +"inicio"+"->"+instruccion.ID+"\n"



        /*try {
           instruccion.ejecutar();
            console.log("ESTE ES EL STRING-------------------------------------------")
            console.log(instruccion.graficar());
            console.log("ESTE ES EL Impresion-------------------------------------------")
            instruccion.imprimir();
        } catch (error) {
            console.log(error);
            
        }*/
    }

    console.log("ESTE ES EL STRING FINAAAAAAAAL")
    console.log(string)
    
} catch (error) {
    console.log(error);  
    
}

