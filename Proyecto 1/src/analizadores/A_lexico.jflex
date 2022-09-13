package analizadores;
import java_cup.runtime.*;


%%



//directrices


%public 
%class Analizador_Lexico
%cupsym Simbolos
%cup
%char
%column
%full
%ignorecase
%line
%unicode


letra  = [a-zA-Z]
interrogacion_A  = [\¿]
interrogacion_B  = [?]
igual  = [\=]
id     = {letra}+
comentario_una_linea =  (\/\/[^\n]*\n)
comentario_multilinea =  (\/\*[^*\/]*\*\/)
nombre_variable = (_[a-zA-Z0-9]*_)

%%
<YYINITIAL>"numero"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada lexema:"+yytext());
                    return new Symbol(Simbolos.prNumero, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"cadena"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada lexema:"+yytext());
                    return new Symbol(Simbolos.prCadena, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"boolean"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada lexema:"+yytext());
                    return new Symbol(Simbolos.prBoolean, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"caracter"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada lexema:"+yytext());
                    return new Symbol(Simbolos.prCaracter, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"+"   {
                    //codigo en java
                    System.out.println("Reconocio token:<mas> lexema:"+yytext());
                    return new Symbol(Simbolos.mas, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"-"   {
                    //codigo en java
                    System.out.println("Reconocio token:<menos> lexema:"+yytext());
                    return new Symbol(Simbolos.menos, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"*"   {
                    //codigo en java
                    System.out.println("Reconocio token:<multiplicacion> lexema:"+yytext());
                    return new Symbol(Simbolos.multiplicacion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"/"   {
                    //codigo en java
                    System.out.println("Reconocio token:<divicion> lexema:"+yytext());
                    return new Symbol(Simbolos.divicion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"potencia"   {
                    //codigo en java
                    System.out.println("Reconocio token:<potencia> lexema:"+yytext());
                    return new Symbol(Simbolos.potencia, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"mod"   {
                    //codigo en java
                    System.out.println("Reconocio  token:<modulo> lexema:"+yytext());
                    return new Symbol(Simbolos.mod, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"("   {
                    //codigo en java
                    System.out.println("Reconocio token:<parentesis_A> lexema:"+yytext());
                    return new Symbol(Simbolos.parentesis_A, yycolumn, yyline, yytext());
                  }
<YYINITIAL>")"   {
                    //codigo en java
                    System.out.println("Reconocio token:<parentesis_A> lexema:"+yytext());
                    return new Symbol(Simbolos.parentesis_B, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"mayor"   {
                    //codigo en java
                    System.out.println("Reconocio token:<mayor> lexema:"+yytext());
                    return new Symbol(Simbolos.mayor, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"menor"   {
                    //codigo en java
                    System.out.println("Reconocio token:<menor> lexema:"+yytext());
                    return new Symbol(Simbolos.menor, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"mayor_o_igual"   {
                    //codigo en java
                    System.out.println("Reconocio token:<mayor_o_igual> lexema:"+yytext());
                    return new Symbol(Simbolos.mayor_o_igual, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"menor_o_igual"   {
                    //codigo en java
                    System.out.println("Reconocio token:<menor_o_igual> lexema:"+yytext());
                    return new Symbol(Simbolos.menor_o_igual, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"es_igual"   {
                    //codigo en java
                    System.out.println("Reconocio token:<es_igual> lexema:"+yytext());
                    return new Symbol(Simbolos.es_igual, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"es_diferente"   {
                    //codigo en java
                    System.out.println("Reconocio token:<es_diferente> lexema:"+yytext());
                    return new Symbol(Simbolos.es_diferente, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"or"   {
                    //codigo en java
                    System.out.println("Reconocio token:<or> lexema:"+yytext());
                    return new Symbol(Simbolos.or, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"and"   {
                    //codigo en java
                    System.out.println("Reconocio token:<and> lexema:"+yytext());
                    return new Symbol(Simbolos.and, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"not"   {
                    //codigo en java
                    System.out.println("Reconocio token:<not> lexema:"+yytext());
                    return new Symbol(Simbolos.not, yycolumn, yyline, yytext());
                  }





<YYINITIAL>"ingresar"   {
                    //codigo en java
                    System.out.println("Reconocio token:<ingresar> lexema:"+yytext());
                    return new Symbol(Simbolos.prIngresar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"como"   {
                    //codigo en java
                    System.out.println("Reconocio token:<como> lexema:"+yytext());
                    return new Symbol(Simbolos.prComo, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"con_valor"   {
                    //codigo en java
                    System.out.println("Reconocio token:<con_valor> lexema:"+yytext());
                    return new Symbol(Simbolos.prCon_valor, yycolumn, yyline, yytext());
                  }


<YYINITIAL>{nombre_variable}  {
                    System.out.println("Reconocio token:<nombre_variable> lexema:"+yytext());
                    return new Symbol(Simbolos.nombre_variable, yycolumn, yyline, yytext()); 
                    }



<YYINITIAL>"->"   {
                    //codigo en java
                    System.out.println("Reconocio token:<Asignacion> lexema:"+yytext());
                    return new Symbol(Simbolos.asignacion, yycolumn, yyline, yytext());
                  }

<YYINITIAL>";"   {
                    //codigo en java
                    System.out.println("Reconocio token:<punto_coma> lexema:"+yytext());
                    return new Symbol(Simbolos.punto_coma, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"si"   {
                    //codigo en java
                    System.out.println("Reconocio token:<si> lexema:"+yytext());
                    return new Symbol(Simbolos.si, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_si"   {
                    //codigo en java
                    System.out.println("Reconocio token:<fin_si> lexema:"+yytext());
                    return new Symbol(Simbolos.fin_si, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"de_lo_contrario"   {
                    //codigo en java
                    System.out.println("Reconocio token:<de_lo_contrario> lexema:"+yytext());
                    return new Symbol(Simbolos.de_lo_contrario, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"o_si"   {
                    //codigo en java
                    System.out.println("Reconocio token:<o_si> lexema:"+yytext());
                    return new Symbol(Simbolos.o_si, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"segun"   {
                    //codigo en java
                    System.out.println("Reconocio token:<segun> lexema:"+yytext());
                    return new Symbol(Simbolos.segun, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hacer"   {
                    //codigo en java
                    System.out.println("Reconocio token:<hacer> lexema:"+yytext());
                    return new Symbol(Simbolos.hacer, yycolumn, yyline, yytext());
                  }
<YYINITIAL>{interrogacion_A}   {
                    //codigo en java
                    System.out.println("Reconocio token:<¿> lexema:"+yytext());
                    return new Symbol(Simbolos.interrogacion_A, yycolumn, yyline, yytext());
                  }
<YYINITIAL>{interrogacion_B}   {
                    //codigo en java
                    System.out.println("Reconocio token:<?> lexema:"+yytext());
                    return new Symbol(Simbolos.interrogacion_B, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"entonces"   {
                    //codigo en java
                    System.out.println("Reconocio token:<entonces> lexema:"+yytext());
                    return new Symbol(Simbolos.entonces, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_segun"   {
                    //codigo en java
                    System.out.println("Reconocio token:<fin_segun> lexema:"+yytext());
                    return new Symbol(Simbolos.fin_segun, yycolumn, yyline, yytext());
                  }





<YYINITIAL>"para"   {
                    //codigo en java
                    System.out.println("Reconocio token:<para> lexema:"+yytext());
                    return new Symbol(Simbolos.para, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"hasta"   {
                    //codigo en java
                    System.out.println("Reconocio token:<hasta> lexema:"+yytext());
                    return new Symbol(Simbolos.hasta, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"fin_para"   {
                    //codigo en java
                    System.out.println("Reconocio token:<fin_para> lexema:"+yytext());
                    return new Symbol(Simbolos.fin_para, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"mientras"   {
                    //codigo en java
                    System.out.println("Reconocio token:<mientras> lexema:"+yytext());
                    return new Symbol(Simbolos.mientras, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin_mientras"   {
                    //codigo en java
                    System.out.println("Reconocio token:<fin_mientas> lexema:"+yytext());
                    return new Symbol(Simbolos.fin_mientras, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"repetir"   {
                    //codigo en java
                    System.out.println("Reconocio token:<repetir> lexema:"+yytext());
                    return new Symbol(Simbolos.repetir, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hasta_que"   {
                    //codigo en java
                    System.out.println("Reconocio token:<hasta_que> lexema:"+yytext());
                    return new Symbol(Simbolos.hasta_que, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"funcion"   {
                    //codigo en java
                    System.out.println("Reconocio token:<funcion> lexema:"+yytext());
                    return new Symbol(Simbolos.funcion, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin_funcion"   {
                    //codigo en java
                    System.out.println("Reconocio token:<fin_funcion> lexema:"+yytext());
                    return new Symbol(Simbolos.fin_funcion, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"con_parametros"   {
                    //codigo en java
                    System.out.println("Reconocio token:<con_parametros> lexema:"+yytext());
                    return new Symbol(Simbolos.con_parametros, yycolumn, yyline, yytext());
                  }

<YYINITIAL>{igual}   {
                    //codigo en java
                    System.out.println("Reconocio token:<igual> lexema:"+yytext());
                    return new Symbol(Simbolos.igual, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"retornar"   {
                    //codigo en java
                    System.out.println("Reconocio token:<retornar> lexema:"+yytext());
                    return new Symbol(Simbolos.retornar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"metodo"   {
                    //codigo en java
                    System.out.println("Reconocio token:<metodo> lexema:"+yytext());
                    return new Symbol(Simbolos.metodo, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin_metodo"   {
                    //codigo en java
                    System.out.println("Reconocio token:<fin_metodo> lexema:"+yytext());
                    return new Symbol(Simbolos.fin_metodo, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"ejecutar"   {
                    //codigo en java
                    System.out.println("Reconocio token:<ejecutar> lexema:"+yytext());
                    return new Symbol(Simbolos.ejecutar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"imprimir"   {
                    //codigo en java
                    System.out.println("Reconocio token:<imprimir> lexema:"+yytext());
                    return new Symbol(Simbolos.imprimir, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"imprimir_nl"   {
                    //codigo en java
                    System.out.println("Reconocio token:<imprimir_nl> lexema:"+yytext());
                    return new Symbol(Simbolos.imprimir_nl, yycolumn, yyline, yytext());
                  }







<YYINITIAL>","   {
                    //codigo en java
                    System.out.println("Reconocio token:<coma> lexema:"+yytext());
                    return new Symbol(Simbolos.coma, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"inicio"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prInicio, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFin, yycolumn, yyline, yytext());
                  }

<YYINITIAL>{id}  {
                    System.out.println("Reconocio token:<id> lexema:"+yytext());
                    return new Symbol(Simbolos.id, yycolumn, yyline, yytext()); 
                    }

{comentario_una_linea}  { /* ignore */ }
{comentario_multilinea}  { /* ignore */ }



[ \t\r\n\f]         {  /*este es un comentario en java, omitirlos*/ }


.                   {
                        System.out.println("Error Lexico : "+yytext()+
"Linea"+(yyline+1)+" Columna "+yycolumn);    

}