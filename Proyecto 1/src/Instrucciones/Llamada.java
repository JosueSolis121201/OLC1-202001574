/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Instrucciones ;

/**
 *
 * @author josue
 */
public class Llamada extends Instruccion{
    String nombre;
    Instruccion tipo;
    
    
    public Llamada(String nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
       String retorno = this.crearTabuladores(nivel);
        retorno =retorno+this.nombre+" ("+this.tipo.generarPython(nivel)+") \n";
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = " ";
        retorno =retorno+this.nombre+" ("+this.tipo.generarGo()+") \n";
        return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Llamada"+"\"]" + "\n";;
       
       retorno  = retorno+ this.generarId(nombre)+"[label=\""+this.nombre+"\"]" + "\n";
       retorno  = retorno+ this.tipo.graficar() + "\n";    
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.tipo) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(nombre) + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.nombre +this.tipo.imprimir();
        return retorno;
    }
    
}
