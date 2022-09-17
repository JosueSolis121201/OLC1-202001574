/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Instrucciones;

import java.util.ArrayList;

/**
 *
 * @author josue
 */
public class Lista_Switch extends Instruccion {
    ArrayList<Instruccion> lista;
    public Lista_Switch(){
        this.lista = new ArrayList();
    }
    
    
    public void agregarNombre(Instruccion nombre){
        lista.add(nombre);
    }    
    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        for(Instruccion inst : this.lista){
            retorno  = retorno  + inst.generarPython(nivel);
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
       String retorno = "";
        for (int i=0;i<lista.size();i++) {
            retorno = retorno + lista.get(i).imprimir();
    }
        return retorno;
    }
    
}
