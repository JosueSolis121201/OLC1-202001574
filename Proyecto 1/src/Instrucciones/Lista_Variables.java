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
public class Lista_Variables extends Instruccion {
    ArrayList<Instruccion> lista;
    public Lista_Variables(Instruccion nombre){
        this.lista = new ArrayList();
        lista.add(nombre);
    }
    public void agregarNombre(Instruccion nombre){
        lista.add(nombre);
    }    
    @Override
    public String generarPython(int nivel) {
        String retorno = "";
        int numero =0;
        for(Instruccion inst : this.lista){
            String coma = "";
            if(this.lista.size() > 1 ){
                coma = ",";
                numero=numero+1;
                if (this.lista.size()==numero){
                    coma = "";
                }
            }
            
            
            retorno  = retorno+inst.generarPython(nivel) + coma;
        }
       return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        int numero =0;
        for(Instruccion inst : this.lista){
            String coma = "";
            if(this.lista.size() > 1 ){
                coma = ",";
                numero=numero+1;
                if (this.lista.size()==numero){
                    coma = "";
                }
            }
            
            
            retorno  = retorno+inst.generarGo() + coma;
        }
       return retorno;
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
