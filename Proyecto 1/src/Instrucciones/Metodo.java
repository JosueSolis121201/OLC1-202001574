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
public class Metodo extends Instruccion{
    Instruccion dato;
    String nombre;
    Instruccion cuerpo;
    
    public Metodo(String nombre,Instruccion dato,Instruccion cuerpo){
        this.nombre = nombre;
        this.dato = dato;
        this.cuerpo = cuerpo;
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno + "def "+this.nombre+" ("+this.dato.generarPython(nivel)+"): "+"\n" +this.cuerpo.generarPython(nivel);
      
       return retorno;
    }
    

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  = retorno + "func "+this.nombre+" ("+this.dato.generarGo()+"){ "+"\n" +this.cuerpo.generarGo()+""+"}";
      
       return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Metodos"+"\"]" + "\n";;
       retorno  = retorno+ this.generarId(this)+"ME[label=\""+this.nombre.replace("\"", "")+"\"]" + "\n";
       retorno  = retorno+ this.dato.graficar() + "\n";       
       retorno  = retorno+ this.cuerpo.graficar() + "\n";
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.dato) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this)+"ME" + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.cuerpo) + "\n";
    return retorno;
    }
    

    @Override
    public String imprimir() {
        String retorno = this.nombre +this.dato.imprimir()+this.cuerpo.imprimir();
        return retorno;
    }
    
}
