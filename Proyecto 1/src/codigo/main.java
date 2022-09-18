/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package codigo;

import analizadores.Analizador_Lexico;
import analizadores.Analizador_sintactico;
import java.io.BufferedReader;
import java.io.FileReader;

/**
 *
 * @author bmois
 */
public class main{

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        BufferedReader buff = new BufferedReader(new FileReader("./entrada.txt"));     
        Analizador_Lexico lexico = new Analizador_Lexico(buff);
        Analizador_sintactico sintactico = new Analizador_sintactico(lexico);
        
        sintactico.parse();
        String imprmir = sintactico.raiz.generarPython(0);
        String imprmir1 = sintactico.raiz.generarGo();
        String imprmir2 = sintactico.raiz.graficar();
        System.out.println(imprmir2);
        
    }
    
}