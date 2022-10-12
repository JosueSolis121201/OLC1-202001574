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
public class Unario extends Instruccion{
    String operador;
    Instruccion dato;
    
    public Unario(String operador,Instruccion dato){
        this.operador = operador;
        this.dato = dato;
    }

    @Override
    public String generarPython(int nivel) {
       String retorno = this.crearTabuladores(nivel);
            retorno  =retorno+ this.operador +this.dato.generarPython(nivel) +"\n";
       return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
            retorno  =retorno+ this.operador +this.dato.generarGo() +"\n";
       return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Operacion binaria"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(this)+"UN[label=\""+this.operador.replace("\"", "")+"\"]" + "\n";
       retorno  = retorno+ this.dato.graficar() + "\n";       
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.dato) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this)+"UN" + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.operador +this.dato.imprimir();
        return retorno;
    }
    
}
