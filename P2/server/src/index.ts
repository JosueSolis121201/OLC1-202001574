import { count } from "console";
import { S1_list } from "./instrucciones/lista_s1";

const parser = require("./grammar/grammar");
const fs = require("fs");



try {
    const entrada = fs.readFileSync("src/entrada.txt");
    const ast:S1_list = parser.parse(entrada.toString());
    
    const ast_list = ast.lista;
    console.log({ast:ast})
    for (const instruccion of ast_list) {
        try {
            instruccion.ejecutar();
            console.log("ESTE ES EL STRING-------------------------------------------")
            console.log(instruccion.graficar());
            console.log("ESTE ES EL Impresion-------------------------------------------")
            instruccion.imprimir();
        } catch (error) {
            console.log(error);
            
        }
    }

    
    
} catch (error) {
    console.log(error);  
    
}

