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
public class OperacionBinaria implements Instruccion{
    Instruccion izquierdo;
    Instruccion derecho;
    String operador;
    
    public OperacionBinaria(Instruccion izquierdo,Instruccion derecho,String operador){
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }
    
    
    @Override
    public String generarPython() {
        String retorno = this.izquierdo.generarPython() + this.operador + this.derecho.generarPython();
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
        String retorno = this.izquierdo.imprimir()+ this.operador + this.derecho.imprimir();
        return retorno;
    }
    
}
