/*
 * To change this license header, choose License Headers in Project Properties.n
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Instrucciones ;

/**
 *
 * @author josue
 */
public class Repetir extends Instruccion{
    Instruccion nombre;
    Instruccion tipo;
    
    
    public Repetir(Instruccion nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno =retorno+ "While valor == True: \n "+this.nombre.generarPython(nivel)+"\n"+"If valor == False: \n "+this.tipo.generarPython(nivel);
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
        String retorno =  this.tipo.imprimir()+this.nombre.imprimir();
        
        return retorno;
    }
    
}
