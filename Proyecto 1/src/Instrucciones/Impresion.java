/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Instrucciones;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author josue
 */
public class Impresion extends Instruccion{
    Instruccion dato;
    String operador;
    
    public Impresion(String operador,Instruccion dato){
        this.operador = operador;
        this.dato =dato;
    }
    
    
    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  =retorno +  "print("+this.dato.generarPython(nivel)+")";
       return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  =retorno +  "fmt.Print( "+this.dato.generarGo()+")";
       return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Impresion"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(this)+"IMP[label=\""+this.operador.replace("\"", "")+"\"]" + "\n";
       retorno  = retorno+ this.dato.graficar() + "\n";       
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.dato) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this)+"IMP" + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno =  this.operador + this.dato.imprimir();
        return retorno;
    }
    
}
