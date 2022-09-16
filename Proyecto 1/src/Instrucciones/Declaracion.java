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
public class Declaracion implements Instruccion {
    Instruccion dato;
    Instruccion tipo;
    Instruccion expresion;
    
    public Declaracion(Instruccion dato,Instruccion tipo,Instruccion expresion){
        this.dato = dato;
        this.tipo = tipo;
        this.expresion = expresion;
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
        String retorno = this.dato.imprimir() + this.tipo.imprimir() + this.expresion.imprimir ();
        return retorno;
    }
}