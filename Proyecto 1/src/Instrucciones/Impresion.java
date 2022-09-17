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
public class Impresion implements Instruccion{
    Instruccion dato;
    String operador;
    
    public Impresion(String operador,Instruccion dato){
        this.operador = operador;
        this.dato =dato;
    }
    
    
    @Override
    public String generarPython() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
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
        String retorno =  this.operador + this.dato.imprimir();
        return retorno;
    }
    
}
