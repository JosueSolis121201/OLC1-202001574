import { count } from "console";
import { S1_list } from "./instrucciones/lista_s1";
import { TablaSimbolos } from "./datos/tabla_simbolos";
import { Valor } from "./datos/valor";
import { Funcion } from "./instrucciones/funcion";
const { exec } = require("child_process");



const parser = require("./grammar/grammar");
const fs = require("fs");



try {
    const entrada = fs.readFileSync("src/entrada.txt");
    const ast:S1_list = parser.parse(entrada.toString());
    const env= new TablaSimbolos("Global",undefined); 
    
    const ast_list = ast.lista;
    let padre ="inicio"+"[label=\""+" S0 \"] \n";
    let string =padre
    //console.log({ast:ast})
    //primer recorrido encuentra y ejecuta funciones y metodos
    for(const instruccion of ast_list){
        if(instruccion.esFuncion() || instruccion.esMetodo()){
            let inst:any = instruccion;
            // si entra aqui significa que intruccion es una funcion o metodo(obvio) 
            // valor de la funcion es lo que retorna de tabla
            env.guardarFuncionMetodo(inst,inst.identificador);
        }
    }
    
    //Seundo recorrido ejecuta el AST
     for (const instruccion of ast_list) {
        if(!instruccion.esFuncion() && !instruccion.esMetodo()){
            instruccion.ejecutar(env)
        }
        
        string = string +instruccion.graficar()+"\n"
        string = string +"inicio"+"->"+instruccion.ID+"\n"
        
        console.log(__filename)

    }
    string = "digraph G {"+string+ "}";
    fs.writeFile(__dirname+'/dot.dot', string, (err:any) => {
        if (err) {
          console.error(err);
        }
    })
    exec("dot -Tpng " + __dirname+'/dot.dot' +" >" + __dirname +"/output.png", (error:any, stdout:any, stderr:any) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    let image_blob:any = fs.readFileSync(__dirname +"/output.png");
    let base64 = Buffer.from(image_blob).toString('base64');
    console.log("----------------TABLA DE SIMBOLOS------------------------")
    console.log(env.diccionario) 
    console.log("----------------FUNCIONES METODOS------------------------")
    console.log(env.diccionario_funcion) 
    console.log("----------------TABLA DE SIMBOLOS------------------------")
   

    console.log("ESTE ES EL STRING FINAAAAAAAAL")
    //console.log(string)
    
    
} catch (error) {
    console.log(error);  
    
}

