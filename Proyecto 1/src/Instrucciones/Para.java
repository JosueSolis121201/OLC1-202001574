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
public class Para implements Instruccion{
    Instruccion expresion;
    Instruccion expresion1;
    Instruccion expresion2;
    Instruccion para_f;
    
    
    public Para(Instruccion expresion,Instruccion expresion1, Instruccion expresion2, Instruccion para_f){
        this.expresion = expresion;
        this.expresion1 = expresion1;
        this.expresion2 = expresion2;
        this.para_f = para_f;
        
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
        String retorno = this.expresion.imprimir() +this.expresion1.imprimir() + this.expresion2.imprimir();
        if (this.para_f != null){
            retorno= retorno+this.para_f.imprimir();
        }
        return retorno;
    }
    
}
