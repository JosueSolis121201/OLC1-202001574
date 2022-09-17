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
public class Declaracion extends Instruccion {
    Instruccion dato;
    Instruccion tipo;
    Instruccion expresion;
    
    public Declaracion(Instruccion dato,Instruccion tipo,Instruccion expresion){
        this.dato = dato;
        this.tipo = tipo;
        this.expresion = expresion;
    }
    
    

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  =retorno +this.dato.generarPython(nivel)+"="+this.expresion.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  =retorno+ "var "+this.dato.generarGo()+" "+this.tipo.generarGo()+"="+this.expresion.generarGo();
        return retorno;
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