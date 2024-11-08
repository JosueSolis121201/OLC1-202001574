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
public class Para_F extends Instruccion{
    Instruccion nombre;
    Instruccion tipo;
    
    
    public Para_F(Instruccion nombre,Instruccion tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        
    }

    @Override
    public String generarPython(int nivel) {
       String retorno = this.crearTabuladores(nivel);
            retorno  = retorno+this.tipo.generarPython(nivel)+"\n";
      
       return retorno;
    }

    @Override
    public String generarGo() {
        String retorno = "";
            retorno  = retorno+this.tipo.generarGo();
        return retorno;
            
    }

    @Override
    public String graficar() {
       String retorno = this.generarId(this)+"[label=\""+"Para final"+"\"]" + "\n";;
       
       retorno  = retorno+ this.tipo.graficar() + "\n";
       retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.tipo) + "\n";
       
       if (this.nombre != null){
            retorno  = retorno+ this.nombre.graficar() + "\n"; 
            retorno  = retorno + this.generarId(this)+"->"+ this.generarId(this.nombre) + "\n";
        }
        
       
       return retorno;
    }

    @Override
    public String imprimir() {
        String retorno =  this.tipo.imprimir();
        if (this.nombre != null){
            retorno= retorno+this.nombre.imprimir();
        }
        return retorno;
    }
    
}
