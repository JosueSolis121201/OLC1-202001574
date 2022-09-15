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

num = ([0-9]+)
String =  [\"]([^\"])*[\"]
letra  = [a-zA-Z]
interrogacion_A  = [\¿]
interrogacion_B  = [?]
igual  = [\=]
id     = {letra}+
comentario_una_linea =  (\/\/[^\n]*\n)
comentario_multilinea =  (\/\*[^*\/]*\*\/)
nombre_variable = (_[a-zA-Z0-9]*_)
double = (\d+\.\d+)
char = (\')[^\']{1}(\')


%%
<YYINITIAL>"numero"   {
                    return new Symbol(Simbolos.prNumero, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"verdadero"   {
                    return new Symbol(Simbolos.Verdadero, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"falso"   {
                    return new Symbol(Simbolos.Falso, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"numero"   {
                    return new Symbol(Simbolos.prNumero, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"cadena"   {
                    return new Symbol(Simbolos.prCadena, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"boolean"   {
                    return new Symbol(Simbolos.prBoolean, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"caracter"   {
                    return new Symbol(Simbolos.prCaracter, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"+"   {
                    return new Symbol(Simbolos.mas, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"-"   {
                    return new Symbol(Simbolos.menos, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"*"   {
                    return new Symbol(Simbolos.multiplicacion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"/"   {
                    return new Symbol(Simbolos.divicion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"potencia"   {
                    return new Symbol(Simbolos.potencia, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"mod"   {
                    return new Symbol(Simbolos.mod, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"("   {
                    return new Symbol(Simbolos.parentesis_A, yycolumn, yyline, yytext());
                  }
<YYINITIAL>")"   {
                    return new Symbol(Simbolos.parentesis_B, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"["   {
                    return new Symbol(Simbolos.corchete_A, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"]"   {
                    return new Symbol(Simbolos.corchete_B, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"mayor"   {
                    return new Symbol(Simbolos.mayor, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"menor"   {
                    return new Symbol(Simbolos.menor, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"mayor_o_igual"   {
                    return new Symbol(Simbolos.mayor_o_igual, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"menor_o_igual"   {
                    return new Symbol(Simbolos.menor_o_igual, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"es_igual"   {
                    return new Symbol(Simbolos.es_igual, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"es_diferente"   {
                    return new Symbol(Simbolos.es_diferente, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"or"   {
                    return new Symbol(Simbolos.or, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"and"   {
                    return new Symbol(Simbolos.and, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"not"   {
                    return new Symbol(Simbolos.not, yycolumn, yyline, yytext());
                  }





<YYINITIAL>"ingresar"   {
                    return new Symbol(Simbolos.prIngresar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"como"   {
                    return new Symbol(Simbolos.prComo, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"con_valor"   {
                    return new Symbol(Simbolos.prCon_valor, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"con"   {
                    return new Symbol(Simbolos.con, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"incremental"   {
                    return new Symbol(Simbolos.incremental, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"or"   {
                    return new Symbol(Simbolos.or, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"and"   {
                    return new Symbol(Simbolos.and, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"not"   {
                    return new Symbol(Simbolos.not, yycolumn, yyline, yytext());
                  }


<YYINITIAL>{nombre_variable}  {
                    return new Symbol(Simbolos.nombre_variable, yycolumn, yyline, yytext()); 
                    }



<YYINITIAL>"->"   {
                    return new Symbol(Simbolos.asignacion, yycolumn, yyline, yytext());
                  }

<YYINITIAL>";"   {
                    return new Symbol(Simbolos.punto_coma, yycolumn, yyline, yytext());
                  }



<YYINITIAL>"si"   {
                    return new Symbol(Simbolos.si, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_si"   {
                    return new Symbol(Simbolos.fin_si, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"de_lo_contrario"   {
                    return new Symbol(Simbolos.de_lo_contrario, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"o_si"   {
                    return new Symbol(Simbolos.o_si, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"segun"   {
                    return new Symbol(Simbolos.segun, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hacer"   {
                    return new Symbol(Simbolos.hacer, yycolumn, yyline, yytext());
                  }
<YYINITIAL>{interrogacion_A}   {
                    return new Symbol(Simbolos.interrogacion_A, yycolumn, yyline, yytext());
                  }
<YYINITIAL>{interrogacion_B}   {
                    return new Symbol(Simbolos.interrogacion_B, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"entonces"   {
                    return new Symbol(Simbolos.entonces, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_segun"   {
                    return new Symbol(Simbolos.fin_segun, yycolumn, yyline, yytext());
                  }





<YYINITIAL>"para"   {
                    return new Symbol(Simbolos.para, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"hasta"   {
                    return new Symbol(Simbolos.hasta, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"fin_para"   {
                    return new Symbol(Simbolos.fin_para, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"mientras"   {
                    return new Symbol(Simbolos.mientras, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin_mientras"   {
                    return new Symbol(Simbolos.fin_mientras, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"repetir"   {
                    return new Symbol(Simbolos.repetir, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hasta_que"   {
                    return new Symbol(Simbolos.hasta_que, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"funcion"   {
                    return new Symbol(Simbolos.funcion, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin_funcion"   {
                    return new Symbol(Simbolos.fin_funcion, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"con_parametros"   {
                    return new Symbol(Simbolos.con_parametros, yycolumn, yyline, yytext());
                  }

<YYINITIAL>{igual}   {
                    return new Symbol(Simbolos.igual, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"retornar"   {
                    return new Symbol(Simbolos.retornar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"metodo"   {
                    return new Symbol(Simbolos.metodo, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin_metodo"   {
                    return new Symbol(Simbolos.fin_metodo, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"ejecutar"   {
                    return new Symbol(Simbolos.ejecutar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"imprimir"   {
                    return new Symbol(Simbolos.imprimir, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"imprimir_nl"   {
                    return new Symbol(Simbolos.imprimir_nl, yycolumn, yyline, yytext());
                  }



<YYINITIAL>{num}  {
                    return new Symbol(Simbolos.num, yycolumn, yyline, yytext()); 
                    }

<YYINITIAL>{String}  {
                    return new Symbol(Simbolos.String, yycolumn, yyline, yytext()); 
                    }

<YYINITIAL>{double}  {
                    return new Symbol(Simbolos.Double, yycolumn, yyline, yytext()); 
                    }



<YYINITIAL>","   {
                    return new Symbol(Simbolos.coma, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"inicio"   {
                    return new Symbol(Simbolos.prInicio, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin"   {
                    return new Symbol(Simbolos.prFin, yycolumn, yyline, yytext());
                  }

<YYINITIAL>{id}  {
                    return new Symbol(Simbolos.id, yycolumn, yyline, yytext()); 
                    }

<YYINITIAL>{char}  {
                    return new Symbol(Simbolos.Char, yycolumn, yyline, yytext()); 
                    }

{comentario_una_linea}  { /* ignore */ }
{comentario_multilinea}  { /* ignore */ }



[ \t\r\n\f]         {  /*este es un comentario en java, omitirlos*/ }


.                   {
                        System.out.println("Error Lexico : "+yytext()+
"Linea"+(yyline+1)+" Columna "+yycolumn);    

}