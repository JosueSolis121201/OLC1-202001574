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
        String retorno = "";
        retorno =retorno+ "for true{ \n "+this.nombre.generarGo()+"\n"+"If("+this.tipo.generarGo()+"){ \n break \n } \n }";
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
        String retorno =  this.tipo.imprimir()+this.nombre.imprimir();
        
        return retorno;
    }
    
}
