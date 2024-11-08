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
public class Para extends Instruccion{
    Instruccion expresion;
    Instruccion expresion1;
    Instruccion expresion2;
    Instruccion para_f;
    
    
    public Para(Instruccion expresion,Instruccion expresion1, Instruccion expresion2, Instruccion para_f){
        this.expresion = expresion;
        this.expresion1 = expresion1;
        this.expresion2 = expresion2;
        this.para_f = para_f;
        
    }

    @Override
    public String generarPython(int nivel) {
        
        String retorno = this.crearTabuladores(nivel);
            retorno  = retorno+"for "+this.expresion.generarPython(nivel)+" in "+this.expresion1.generarPython(nivel)+": \n"+ this.crearTabuladores(nivel+1) +this.para_f.generarPython(nivel)+"\n";
      
       return retorno;
    }

    @Override
    public String generarGo() {
        
        String retorno = "";
        retorno  = retorno+"for "+this.expresion.generarGo()+"; "+this.expresion1.generarGo()+"; " +this.expresion2.generarGo()+"{ \n"+this.para_f.generarGo()+"\n }";
        return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Para"+"\"]" + "\n";;
       retorno  = retorno+ this.expresion.graficar() + "\n";       
       retorno  = retorno+ this.expresion1.graficar() + "\n";
       retorno  = retorno+ this.expresion2.graficar() + "\n";       
       retorno  = retorno+ this.para_f.graficar() + "\n";
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.expresion) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.expresion1) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.expresion2) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.para_f) + "\n";
       
        return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.expresion.imprimir() +this.expresion1.imprimir() + this.expresion2.imprimir();
        if (this.para_f != null){
            retorno= retorno+this.para_f.imprimir();
        }
        return retorno;
    }
    
}
