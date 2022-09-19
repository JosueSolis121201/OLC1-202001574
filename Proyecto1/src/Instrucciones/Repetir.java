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
        retorno =retorno+ "while valor == True: \n "+this.nombre.generarPython(nivel+1)+"\n"+"if valor == False: \n "+this.tipo.generarPython(nivel+1);
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
       String retorno = this.generarId(this)+"[label=\""+"Repetir"+"\"]" + "\n";;
       retorno  = retorno+ this.nombre.graficar() + "\n";       
       retorno  = retorno+ this.tipo.graficar() + "\n";
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.nombre) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.tipo) + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno =  this.tipo.imprimir()+this.nombre.imprimir();
        
        return retorno;
    }
    
}
