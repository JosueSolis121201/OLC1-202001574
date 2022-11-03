const express = require('express');
import { count } from "console";
import { S1_list } from "./instrucciones/lista_s1";
import { TablaSimbolos } from "./datos/tabla_simbolos";
import { Valor } from "./datos/valor";
import { Funcion } from "./instrucciones/funcion";
const { exec } = require("child_process");



const parser = require("./grammar/grammar");
const fs = require("fs");
const app = express();
const port = 1000;

var cors = require('cors')


app.use(express.json())
app.use(cors())

app.post('/ejecutar',  (req:any, res:any) => {
    let b64string = req.body.contenido;
    let decoded = Buffer.from(b64string, 'base64').toString();
    try {
        const entrada = decoded;
        const ast:S1_list = parser.parse(entrada.toString());
        const env= new TablaSimbolos("Global",undefined);
        const ast_list = ast.lista;
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
        }
        console.log(env.diccionario)
        res.status(200).send({tabla:env});
    } catch (error) {
        res.status(400).send({error:"no se pudo generar imagen"});
    }
})

app.post('/graficar',  (req:any, res:any) => {
    let b64string = req.body.contenido;
    let decoded = Buffer.from(b64string, 'base64').toString();
    try {
        const entrada = decoded;
        const ast:S1_list = parser.parse(entrada.toString());
        const ast_list = ast.lista;
        let padre ="inicio"+"[label=\""+" S0 \"] \n";
        let string =padre
        for (const instruccion of ast_list) {
            string = string +instruccion.graficar()+"\n"
            string = string +"inicio"+"->"+instruccion.ID+"\n"
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
        res.status(200).send({imagen:"http://localhost:8080/src//output.png"});
    } catch (error) {
        res.status(400).send({error:"no se pudo generar imagen"});
    }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});