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
public class Retornar extends Instruccion{
    String nombre;
    Instruccion tipo;
    
    
    public Retornar(String nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno =retorno+ "retunr "+this.tipo.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno =retorno+ "retunr "+this.tipo.generarGo();
        return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Retornar"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(this)+"RE[label=\""+this.nombre.replace("\"", "")+"\"]" + "\n";
       retorno  = retorno+ this.tipo.graficar() + "\n";       
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.tipo) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this)+"RE" + "\n";
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.nombre + this.tipo.imprimir();
        return retorno;
    }
    
}
