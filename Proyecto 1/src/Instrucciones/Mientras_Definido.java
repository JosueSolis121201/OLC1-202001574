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
public class Mientras_Definido extends Instruccion{
    Instruccion nombre;
    Instruccion tipo;
    
    
    public Mientras_Definido(Instruccion nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno +this.tipo.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  = retorno +this.tipo.generarGo();
        return retorno;
    }

    @Override
    public String graficar() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String imprimir() {
        String retorno =  this.tipo.imprimir();
        if (this.nombre != null){
            retorno= retorno+this.nombre.imprimir();
        }
        return retorno;
    }
    
}
