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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String graficar() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String imprimir() {
       String retorno = this.nombre+this.cuerpo.imprimir();
        return retorno;
    }
    
}
