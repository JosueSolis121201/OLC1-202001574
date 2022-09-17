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
public abstract class Instruccion {
    
    abstract public String generarPython(int nivel);
    
    abstract public String generarGo();
    
    abstract public String graficar();
    
    abstract public String imprimir();
    
    public String crearTabuladores(int nivel){
        String retorno = "";
        
        for(int i=0; i<nivel;i++){
            retorno = retorno + "\t";
        }
        return retorno;
    }


}
