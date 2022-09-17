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
public class Else_If extends Instruccion  {
    String nombre;
    Instruccion dato;
    Instruccion cuerpo;
    
    public Else_If(String nombre,Instruccion dato,Instruccion cuerpo){
        this.dato = dato;
        this.nombre = nombre;
        this.cuerpo = cuerpo;
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno +"Elif "+this.dato.generarPython(nivel)+": \n "+this.cuerpo.generarPython(nivel);
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
       String retorno = this.nombre +this.dato.imprimir()+this.cuerpo.imprimir();
        return retorno;
    }
    
}
