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
public class Funcion extends Instruccion{
    String nombre;
    Instruccion dato;
    Instruccion tipo;
    Instruccion cuerpo;
    
    public Funcion(String nombre,Instruccion tipo,Instruccion dato,Instruccion cuerpo){
        this.nombre = nombre;
        this.dato = dato;
        this.cuerpo = cuerpo;
        this.tipo = tipo;
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno + "def "+this.nombre+" ("+this.dato.generarPython(nivel)+"): "+"\n" +this.cuerpo.generarPython(nivel+1);
        return retorno;
    }

    @Override
    public String generarGo() {
       String retorno = "";
        retorno  = retorno + "func  "+this.nombre+" ("+this.dato.generarGo()+"){ "+"\n" +this.cuerpo.generarGo()+"} \n";
        return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Funcion"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(this)+"FUN[label=\""+this.nombre.replace("\"", "")+"\"]" + "\n";
       retorno  = retorno+ this.dato.graficar() + "\n";       
       retorno  = retorno+ this.tipo.graficar() + "\n";
       retorno  = retorno+ this.cuerpo.graficar() + "\n";
       
        

       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this)+"FUN" + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.dato) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.tipo) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.cuerpo) + "\n";
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.nombre +this.tipo.imprimir()+this.dato.imprimir()+this.cuerpo.imprimir();
        return retorno;
    }
    
}
