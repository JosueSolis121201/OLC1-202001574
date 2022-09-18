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
public class Else_If extends Instruccion  {
    String nombre;
    Instruccion dato;
    Instruccion cuerpo;
    
    public Else_If(String nombre,Instruccion dato,Instruccion cuerpo){
        this.dato = dato;
        this.nombre = nombre;
        this.cuerpo = cuerpo;
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno +"elif "+this.dato.generarPython(nivel)+": \n "+this.cuerpo.generarPython(nivel);
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  = retorno +"elif "+this.dato.generarGo()+"{"+this.cuerpo.generarGo()+"}";
        return retorno;
    }

    @Override
    public String graficar() {
         String retorno = "";
        retorno  =retorno+ this.generarId(this.dato)+"[label=\""+this.dato.graficar()+"\"]";
        retorno  =retorno+ this.generarId(this.cuerpo)+"[label=\""+this.cuerpo.graficar()+"\"]";
        return retorno;
    }

    @Override
    public String imprimir() {
       String retorno = this.nombre +this.dato.imprimir()+this.cuerpo.imprimir();
        return retorno;
    }
    
}
