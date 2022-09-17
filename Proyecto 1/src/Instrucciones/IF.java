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
public class IF implements Instruccion{
    Instruccion expresion;
    Instruccion cuerpo;
    Instruccion else_if;
    Instruccion else_f;
    
    
    public IF(Instruccion expresion,Instruccion cuerpo, Instruccion else_if, Instruccion else_f){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.else_if = else_if;
        this.else_f = else_f;
        
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
        String retorno = this.expresion.imprimir() +this.cuerpo.imprimir() + this.else_if.imprimir();
        if (this.else_f != null){
            retorno= retorno+this.else_f.imprimir();
        }
        return retorno;
    }
    
}
