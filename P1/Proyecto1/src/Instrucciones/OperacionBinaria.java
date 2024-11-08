/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Instrucciones;


/**
 *
 * @author josue
 */
public class OperacionBinaria extends Instruccion{
    Instruccion izquierdo;
    Instruccion derecho;
    String operador;
    
    public OperacionBinaria(Instruccion izquierdo,Instruccion derecho,String operador){
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }
    
    
    @Override
    public String generarPython(int nivel) {
        String retorno ="";
        String data_operador = "";
        switch (this.operador.toLowerCase()) {
    case "mayor":
             data_operador =  ">";
             break;
    case "menor":
             data_operador =  "<";
             break;
    case "mayor_o_igual":
             data_operador = ">=";
             break;
    case "menor_o_igual":
             data_operador = "<=";
             break;
    case "es_igual":
             data_operador = "==";
             break;
    case "es_diferente":
             data_operador = "!=";
             break;
    case "verdadero":
             data_operador = "True";
             break;
    case "falso":
             data_operador = "False";
             break;
    default:
             data_operador = this.operador;
             break;
        }
        retorno = retorno + this.izquierdo.generarPython(nivel) + data_operador + this.derecho.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno ="";
        String data_operador ="";
        switch (this.operador.toLowerCase()) {
    case "mayor":
             data_operador =  ">";
             break;
    case "menor":
             data_operador =  "<";
             break;
    case "mayor_o_igual":
             data_operador = ">=";
             break;
    case "menor_o_igual":
             data_operador = "<=";
             break;
    case "es_igual":
             data_operador = "==";
             break;
    case "es_diferente":
             data_operador = "!=";
             break;
    case "or":
             data_operador = "||";
             break;
    case "and":
             data_operador = "&&";
             break;
    case "not":
             data_operador = "!";
             break;
    case "verdadero":
             data_operador = "true";
             break;
    case "falso":
             data_operador = "false";
             break;
    default:
             data_operador = this.operador;
             break;
        }
        retorno = retorno + this.izquierdo.generarGo() + data_operador + this.derecho.generarGo() ;
        return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Operacion binaria"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(this)+"OP[label=\""+this.operador.replace("\"", "")+"\"]" + "\n";
       retorno  = retorno+ this.izquierdo.graficar() + "\n";       
       retorno  = retorno+ this.derecho.graficar() + "\n";
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.izquierdo) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this)+"OP" + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.derecho) + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.izquierdo.imprimir()+ this.operador + this.derecho.imprimir();
        return retorno;
    }
    
}
