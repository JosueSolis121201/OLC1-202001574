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
public class Asignacion extends Instruccion{
    Instruccion nombre;
    Instruccion tipo;
    
    
    public Asignacion(Instruccion nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
            retorno  = retorno + this.nombre.generarPython(nivel)+"="+this.tipo.generarPython(nivel);
       return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
            retorno  = retorno + this.nombre.generarGo()+"="+this.tipo.generarGo();
       return retorno;
    }

    @Override
    public String graficar() {
        String retorno = "";
        retorno  =retorno+ this.generarId(this.nombre)+"[label=\""+this.nombre.graficar()+"\"]";
        retorno  =retorno+ this.generarId(this.tipo)+"[label=\""+this.tipo.graficar()+"\"]";
        return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.nombre.imprimir() +this.tipo.imprimir();
        return retorno;
    }
    
}
