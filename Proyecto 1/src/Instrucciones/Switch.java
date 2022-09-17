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
public class Switch implements Instruccion{
    Instruccion expresion;
    Instruccion Switch_case;
    Instruccion Switch_f;
    
    
    public Switch(Instruccion expresion,Instruccion Switch_case, Instruccion Switch_f){
        this.expresion = expresion;
        this.Switch_case = Switch_case;
        this.Switch_f = Switch_f;
        
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
        String retorno = this.expresion.imprimir()  + this.Switch_case.imprimir();
        if (this.Switch_f != null){
            retorno= retorno+this.Switch_f.imprimir();
        }
        return retorno;
    }
    
}
