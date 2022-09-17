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
public class S1 extends Instruccion{
    ArrayList<Instruccion> lista;
    
    public S1(Instruccion dato){
        this.lista = new ArrayList();
        lista.add(dato);
    }
    
    public void agregar(Instruccion dato){
        this.lista.add(dato);
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        for(Instruccion inst : this.lista){
            retorno  = retorno  + inst.generarPython(nivel) +"\n";
        }
       return retorno;
    }

    @Override
    public String generarGo() {
         String retorno = "";
        for(Instruccion inst : this.lista){
            retorno  = retorno  + inst.generarGo()+"\n";
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
        for(Instruccion inst : this.lista){
            retorno  = retorno  + inst.imprimir();
        }
       return retorno;
    }
    
}
