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
public class Switch extends Instruccion{
    Instruccion expresion;
    Instruccion Switch_case;
    Instruccion Switch_f;
    
    
    public Switch(Instruccion expresion,Instruccion Switch_case, Instruccion Switch_f){
        this.expresion = expresion;
        this.Switch_case = Switch_case;
        this.Switch_f = Switch_f;
        
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno + "if "+this.expresion.generarPython(nivel)+": \n "+this.Switch_case.generarPython(nivel)+"\n" ;
        if (this.Switch_f != null){
      retorno=retorno + this.Switch_f.generarPython(nivel);
      }
      
       return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
        retorno  = retorno + "switch "+this.expresion.generarGo()+"{ \n "+this.Switch_case.generarGo();
        if (this.Switch_f != null){
      retorno=retorno + this.Switch_f.generarGo();
        }
        return retorno;
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Switch"+"\"]" + "\n";;
       retorno  = retorno+ this.expresion.graficar() + "\n";       
       retorno  = retorno+ this.Switch_case.graficar() + "\n";
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.expresion) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.Switch_case) + "\n";
        if (this.Switch_f != null){
     retorno  = retorno+ this.Switch_f.graficar() + "\n";
     retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.Switch_f) + "\n";
        }
        return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.expresion.imprimir()  + this.Switch_case.imprimir();
        if (this.Switch_f != null){
            retorno= retorno+this.Switch_f.imprimir();
        }
        return retorno;
    }
    
}
