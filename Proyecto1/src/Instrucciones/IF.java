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
public class IF extends Instruccion{
    Instruccion expresion;
    Instruccion cuerpo;
    Instruccion else_if;
    Instruccion else_f;
    
    
    public IF(Instruccion expresion,Instruccion cuerpo, Instruccion else_if, Instruccion else_f){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.else_if = else_if;
        this.else_f = else_f;
        
    }

    @Override
    public String generarPython(int nivel) {
        String retorno = this.crearTabuladores(nivel);
        retorno  = retorno +"if "+this.expresion.generarPython(nivel)+":"+" \n "+this.cuerpo.generarPython(nivel)+this.else_if.generarPython(nivel);
      if (this.else_f != null){
      retorno=retorno + this.else_f.generarPython(nivel);
      }
       return retorno;
    }

    @Override
    public String generarGo() {
         String retorno = "";
        retorno  = retorno +"if "+this.expresion.generarGo()+this.cuerpo.generarGo()+this.else_if.generarGo();
      if (this.else_f != null){
      retorno=retorno + this.else_f.generarGo();
      }
       return retorno;
    }

    @Override
    public String graficar() {
        
       String retorno = this.generarId(this)+"[label=\""+" IF "+"\"]" + "\n";;
       retorno  = retorno+ this.expresion.graficar() + "\n";       
       retorno  = retorno+ this.cuerpo.graficar() + "\n";
       retorno  = retorno+ this.else_if.graficar() + "\n";       
       
       
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.expresion) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(cuerpo) + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.else_if) + "\n";
       
        if (this.else_f != null){
        retorno  = retorno+ this.else_f.graficar() + "\n";
        retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.else_f) + "\n";
      }
        return retorno;
    }

    @Override
    public String imprimir() {
        String retorno = this.expresion.imprimir() +this.cuerpo.imprimir() + this.else_if.imprimir();
        if (this.else_f != null){
            retorno= retorno+this.else_f.imprimir();
        }
        return retorno;
    }
    
}
