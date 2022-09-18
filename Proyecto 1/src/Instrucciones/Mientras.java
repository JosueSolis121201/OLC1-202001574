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
public class Mientras extends Instruccion{
    Instruccion nombre;
    Instruccion tipo;
    
    
    public Mientras(Instruccion nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
      String retorno = this.crearTabuladores(nivel);
      
          
        retorno  = retorno +"While ("+ this.nombre.generarPython(nivel)+"): \n ";
        if(this.tipo.generarPython(nivel) != null){
        retorno = retorno + this.tipo.generarPython(nivel)+"\n "; 
      }
        return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  = retorno +"for true { \n if !("+ this.nombre.generarGo()+"){ \n  break \n }";
        if(this.tipo.generarGo() != null){
        retorno = retorno + this.tipo.generarGo()+"\n } "; 
      }
        return retorno;
    }

    @Override
    public String graficar() {
        String retorno = "";
        retorno  =retorno+ this.generarId(this.nombre)+"[label=\""+this.nombre.graficar()+"\"]";
        if (this.tipo != null){
        retorno  =retorno+ this.generarId(this.tipo)+"[label=\""+this.tipo.graficar()+"\"]";
      }
        return retorno;
    }

    @Override
    public String imprimir() {
        String retorno =  this.tipo.imprimir()+this.nombre.imprimir();
        
        return retorno;
    }
    
}
