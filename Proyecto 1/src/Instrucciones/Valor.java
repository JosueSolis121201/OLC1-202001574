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
public class Valor extends Instruccion{
    String valor;
    
    public Valor(String valor){
        this.valor = valor;
    }
    
    @Override
    public String generarPython(int nivel) {
        return this.valor;
    }

    @Override
    public String generarGo() {
        return this.valor;
    }

    @Override
    public String graficar() {
      return this.valor;
    }

    @Override
    public String imprimir() {
       return this.valor;
    }
}
