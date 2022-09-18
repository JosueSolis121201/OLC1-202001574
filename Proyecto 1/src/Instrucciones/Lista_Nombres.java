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
public class Lista_Nombres extends Instruccion{
    ArrayList<String> lista;
    public Lista_Nombres(String nombre){
        this.lista = new ArrayList();
        lista.add(nombre);
    }
    
    public void agregarNombre(String nombre){
        lista.add(nombre);
    }
        

    @Override
    public String generarPython(int nivel) {
        String retorno = "";
        for(String inst : this.lista){
            retorno  = retorno + inst;
        }
       return retorno;
    }
    

    @Override
    public String generarGo() {
         String retorno = "";
        for(String inst : this.lista){
            retorno  = retorno + inst;
        }
       return retorno;
    }

    @Override
    public String graficar() {
        String retorno = this.generarId(this)+"[label=\""+"Lista nombres"+"\"]";
        for(String inst : this.lista){
            retorno  = retorno+ this.generarId(inst)+"[label=\""+inst+"\"]" + "\n";
            retorno  = retorno + this.generarId(this)+"->"+ this.generarId(inst) + "\n";
        }
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = "";
        for (int i=0;i<lista.size();i++) {
            retorno = retorno + lista.get(i);
    }
        return retorno;
    }
    
}
