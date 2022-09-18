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
public class Switch_Case extends Instruccion  {
    String nombre;
    Instruccion dato;
    Instruccion cuerpo;
    
    public Switch_Case(Instruccion dato,String nombre,Instruccion cuerpo){
        this.dato = dato;
        this.nombre = nombre;
        this.cuerpo = cuerpo;
    }

    @Override
    public String generarPython(int nivel) {
       String retorno = this.crearTabuladores(nivel);
        retorno  = retorno + "elif "+this.dato.generarPython(nivel)+": \n"+this.cuerpo.generarPython(nivel)+"\n" ;
      
       return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  = retorno + "case "+this.dato.generarGo()+": \n"+this.cuerpo.generarGo()+"\n }" ;
       return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Swich case"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(nombre)+"[label=\""+this.nombre+"\"]" + "\n";
       retorno  = retorno+ this.dato.graficar() + "\n";       
       retorno  = retorno+ this.cuerpo.graficar() + "\n";
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.dato) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(nombre) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.cuerpo) + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
       String retorno = this.dato.imprimir()+this.nombre+this.cuerpo.imprimir();
        return retorno;
    }
    
}
