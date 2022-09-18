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
public class Variable extends Instruccion  {
    String nombre;
    Instruccion dato;
    
    public Variable(String nombre,Instruccion dato){
        this.dato = dato;
        this.nombre = nombre;
    }

    @Override
    public String generarPython(int nivel) {
        String retorno  = this.nombre+this.dato.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno  = this.nombre+this.dato.generarGo();
        return retorno;
    }

    @Override
    public String graficar() {
        String retorno = "";
        retorno  =retorno+ this.nombre+"[label=\""+this.nombre+"\"]";
        retorno  =retorno+ this.generarId(this.dato)+"[label=\""+this.dato.graficar()+"\"]";
        return retorno;
    }

    @Override
    public String imprimir() {
       String retorno = this.nombre +this.dato.imprimir();
        return retorno;
    }
    
}
