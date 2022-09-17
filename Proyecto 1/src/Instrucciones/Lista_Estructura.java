/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Instrucciones ;

import java.util.ArrayList;

/**
 *
 * @author josue
 */
public class Lista_Estructura extends Instruccion {
    ArrayList<Instruccion> lista;
    
    public Lista_Estructura(Instruccion nombre){
        this.lista = new ArrayList();
        lista.add(nombre);
    }
    
    public void agregarNombre(Instruccion nombre){
        lista.add(nombre);
    }

    @Override
    public String generarPython(int nivel) {
         String retorno ="";
        for(Instruccion inst : this.lista){
            retorno  = retorno  + inst.generarPython(nivel + 1) +"\n";
        }
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
        String retorno = " ";
        for (int i=0;i<lista.size();i++) {
            retorno = retorno + lista.get(i).imprimir();
    }
        return retorno;
    }
    
}
