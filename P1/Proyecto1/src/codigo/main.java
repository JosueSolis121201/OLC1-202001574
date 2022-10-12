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
import java.io.FileWriter;
import java.io.PrintWriter;
import javax.swing.JFrame;

/**
 *
 * @author bmois
 */
public class main{

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        /*
        
        BufferedReader buff = new BufferedReader(new FileReader("./entrada.txt"));     
        Analizador_Lexico lexico = new Analizador_Lexico(buff);
        Analizador_sintactico sintactico = new Analizador_sintactico(lexico);
        
        sintactico.parse();
        /////////////////////
        ProcessBuilder pbuilder;
        String imprmir = sintactico.raiz.generarPython(0);
        String imprmir1 = sintactico.raiz.generarGo();
        String imprmir2 = sintactico.raiz.graficar();
        
        system.print.out(imprmir2);
        String graphviz = "digraph G {\n"+imprmir2+" }\n";
        
        
        
        
        
        String path = System.getProperty("user.dir");
        String pathImagen = path + "\\arbol.png";        
        String pathDot = path + "\\dot.txt";
        
        
        FileWriter pw =  new FileWriter(pathDot);
        pw.write(graphviz);
        pw.close();
        
        System.err.println("dot "+ "  -Tpng "+ pathDot + " -o "+ pathImagen);
        Runtime.getRuntime().exec("dot "+ " -Tpng "+ pathDot+ " -o "+ pathImagen);
                
        /*pbuilder = new ProcessBuilder(  );
	pbuilder.redirectErrorStream( true );
	pbuilder.start();
        
        
        System.out.println(graphviz);
        */
        
        
        JFrame frame = new NewJFrame();
        frame.setVisible(true);
    }
    
}