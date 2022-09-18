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
public class Switch_f extends Instruccion  {
    String nombre;
    Instruccion cuerpo;
    
    public Switch_f(String nombre,Instruccion cuerpo){
        this.nombre = nombre;
        this.cuerpo = cuerpo;
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno +"Else "+": \n "+this.cuerpo.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = " ";
        retorno  = retorno +"default "+": \n "+this.cuerpo.generarGo();
        return retorno;
    }

    @Override
    public String graficar() {
        
       String retorno = this.generarId(this)+"[label=\""+"Switch final"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(nombre)+"[label=\""+this.nombre+"\"]" + "\n";
       retorno  = retorno+ this.cuerpo.graficar() + "\n";
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(nombre) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.cuerpo) + "\n";
        return retorno;
    }

    @Override
    public String imprimir() {
       String retorno = this.nombre+this.cuerpo.imprimir();
        return retorno;
    }
    
}
