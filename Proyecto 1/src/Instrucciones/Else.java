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
public class Else extends Instruccion{
    String nombre;
    Instruccion tipo;
    
    
    public Else(String nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno +"else "+": \n "+this.tipo.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno ="";
        retorno  = retorno +"else "+"{ \n "+this.tipo.generarGo()+"\n }";
        return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Else"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(nombre)+"[label=\""+this.nombre.replace("\"", "")+"\"]" + "\n";
       retorno  = retorno+ this.tipo.graficar() + "\n";

       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(nombre) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.tipo) + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.nombre +this.tipo.imprimir();
        return retorno;
    }
    
}
