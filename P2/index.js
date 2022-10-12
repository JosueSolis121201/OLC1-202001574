var fs= require('fs') ;

var mygramatica = require('./gramatica.js')



fs.readFile('./entrada.txt',(err,data)=>{
    //si hay un error
    if (err) throw err;


    //si no hay errores
    //gramatica.parse
    console.log("Todo esta bien");
    console.log(data.toString());
    console.log("ahora toca analizar...")
    mygramatica.parse(data.toString())

})