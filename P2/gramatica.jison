%{
    //here variables , JS
    var flag=0;
%}


%lex

%%


//simbolos o palabras reservadas
(\/\/[^\n]*\n)      {  }
(\/\*[^*\/]*\*\/)    {  }    

"inicio" {return 'inicio'}
"fin"    {return 'fin'}

","      {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'coma';   
}
"++"      {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'incremento';   
}
"--"      {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'decremento';   
}

"int"      {
                console.log("Reconocio un simbolo int, coma. Con lexema: "+ yytext);
        return 'int';   
}

"double"      {
                console.log("Reconocio un simbolo double, coma. Con lexema: "+ yytext);
        return 'double';   
}

"char"      {
                console.log("Reconocio un simbolo char, coma. Con lexema: "+ yytext);
        return 'prchar';   
}

"string"        {
                console.log("Reconocio un simbolo string, coma. Con lexema: "+ yytext);
        return 'prstring';   
}

"boolean"        {
                console.log("Reconocio un simbolo boolean, coma. Con lexema: "+ yytext);
        return 'boolean';   
}


[0-9]+"."[0-9]+ {
            console.log("Reconocio un palabra, con el decimal : "+ yytext);
            return 'decimal';
}

[0-9]+  {
            console.log("Reconocio un palabra, con el entero : "+ yytext);
            return 'numero';
}

"True"        {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'true';   
}

"False"        {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'false';   
}

(\')([^\']{1}|"\n"|"\t"|"\r"|"\\\\")(\')  {
            console.log("Reconocio un palabra, con el char : "+ yytext);
            return 'char';
}

(\")[^\"]*(\")  {
            console.log("Reconocio un palabra, con el str : "+ yytext);
            return 'string';
}

"+"        {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'mas';   
}

"-"        {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'menos';   
}

"*"        {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'por';   
}

"/"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'division';   
}

"^"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'potencia';   
}

"%"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'porcentaje';   
}
">="        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'mayor_igual';   
}

"<="        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'menor_igual';   
}
">"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'mayor_que';   
}

"<"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'menor_que';   
}

"=="        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'igual';   
}

"!="        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'diferente';   
}
"!"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'not';   
}

"||"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'or';   
}

"&&"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'and';   
}

"("        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'parentesis_A';   
}
")"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'parentesis_B';   
}

"{"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'llave_A';   
}
"}"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'llave_B';   
}
"["        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'corchete_A';   
}
"]"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'corchete_B';   
}

";"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'punto_coma';   
}

"="        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'igualacion';   
}

"if"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'if';   
}
"else"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'else';   
}

"elif"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'elif';   
}

"switch"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'switch';   
}

"case"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'case';   
}

"default"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'default';   
}

":"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'dos_puntos';   
}

"while"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'while';   
}

"for"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'for';   
}

"new"        {
                console.log("Reconocio un new reservado, coma. Con : "+ yytext);
        return 'new';   
}

"do"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'do';   
}

"until"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'until';   
}

"break"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'break';   
}

"continue"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'continue';   
}

"return"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'return';   
}

"void"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'void';   
}

"println"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'println';   
}
"print"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'print';   
}

"toLower"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'toLower';   
}

"toUpper"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'toUpper';   
}

"length"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'length';   
}

"typeof"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'typeof';   
}

"toCharArray"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'toCharArray';   
}

"push"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'push';   
}

"pop"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'pop';   
}

"?"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'interrogacion';   
}

"."        {
                console.log("RPUNTO : "+ yytext);
        return 'punto';   
}

"run"        {
        return 'run';   
}

"round"        {
        return 'round';   
}

"tostring"        {
        return 'tostring';   
}

[a-zA-Z0-9_]+      {
        console.log("Reconocio un simbolo reservado, identificador "+ yytext);
        return 'identificador';     
}













[ \r\t]+     { /*estos caracteres se omiten*/  }
\n          { /*estos caracteres se omiten*/  }





<<EOF>>      return 'EOF'; 


.          {console.log("Este es un error lexico "+yytext)}

%options case-insensitive
/lex



%start S0



%%


//gramaticas


S0 :  inicio S0P fin EOF  {console.log("TERMINE DE ANALIZAR EL PROYECTO C:");}
        
;



S0P : S0P S1 
        | S1
;

S1 : ESTRUCTURA
;

INSTRUCCIONES : INSTRUCCIONES ESTRUCTURA
        | ESTRUCTURA
;

ESTRUCTURA : DECLARACION
        | ASIGNACION
        | D_VECTORES
        | DL_VECTORES
        | MODIFICAR_VEC
        | IF
        | PRINT
        | PRINTLN
        | SWITCH
        | WHILE
        | INCREMENTO_MINI
        | DECREMENTO_MINI
        | FOR
        | DO_WHILE
        | DO_ULTIL
        | BREAK
        | CONTINUE
        | RETURN
        | FUNCION
        | METODO
        | PUSH
        | POP
        | RUN
        | LLAMADA
;
EXPRESION : OPERACION 
        | CASTEO
        | INCREMENTOS
        | DECREMENTOS
        | menos numero
        | LOWER
        | UPPER
        | ROUND
        | LENGTH
        | TYPEOF
        | TOSTRING
        | TOCHARARRAY
        | LLAMADA_MINI
        | TERNARIO
;

TERNARIO : OPERACION interrogacion OPERACION dos_puntos OPERACION 
;

LLAMADA_MINI : identificador parentesis_A LISTA_VALORES parentesis_B
        | identificador parentesis_A  parentesis_B
;

LLAMADA : identificador parentesis_A LISTA_VALORES parentesis_B punto_coma {console.error("---------LLAMADA");}
;

RUN : run identificador parentesis_A parentesis_B punto_coma {console.error("---------RUN");}
        | run identificador parentesis_A LISTA_VALORES parentesis_B  punto_coma {console.error("---------RUN");}
;

POP : identificador punto pop parentesis_A parentesis_B punto_coma
;

PUSH : identificador punto push parentesis_A EXPRESION parentesis_B punto_coma
;

TOCHARARRAY : toCharArray parentesis_A EXPRESION parentesis_B
;

TOSTRING : tostring parentesis_A EXPRESION parentesis_B
;

TYPEOF : typeof parentesis_A EXPRESION parentesis_B
;

LENGTH : length parentesis_A EXPRESION parentesis_B
;

ROUND : round parentesis_A EXPRESION parentesis_B
;

UPPER : toUpper parentesis_A EXPRESION parentesis_B
;

LOWER : toLower parentesis_A EXPRESION parentesis_B
;

LISTA_VALORES : LISTA_VALORES coma VALORES
        |VALORES
        
;


 
METODO : identificador parentesis_A PARAMETROS parentesis_B dos_puntos void llave_A INSTRUCCIONES llave_B {console.error("---------METODO VOID");}
        | identificador parentesis_A PARAMETROS parentesis_B llave_A INSTRUCCIONES llave_B {console.error("---------METODO");}
;
FUNCION : identificador parentesis_A PARAMETROS parentesis_B dos_puntos TIPO llave_A INSTRUCCIONES llave_B  {console.error("---------FUNCION");}
;

PARAMETROS: PARAMETROS coma TIPO identificador
        | TIPO identificador
        |
;




RETURN : return punto_coma
        | return EXPRESION punto_coma
;
CONTINUE : continue punto_coma
;

BREAK : break punto_coma
;

INCREMENTO_MINI : identificador incremento punto_coma
;

DECREMENTO_MINI : identificador decremento punto_coma
;

PRINT : print parentesis_A EXPRESION parentesis_B punto_coma
;

PRINTLN : println parentesis_A EXPRESION parentesis_B punto_coma
;


DO_ULTIL : do llave_A INSTRUCCIONES llave_B until parentesis_A OPERACION parentesis_B punto_coma  {console.error("---------DO_UNTIL");}
;

DO_WHILE : do llave_A INSTRUCCIONES llave_B while parentesis_A OPERACION parentesis_B punto_coma  {console.error("---------DO_WHILE");}
;

FOR : for parentesis_A ESTRUCTURA OPERACION punto_coma EXPRESION parentesis_B llave_A INSTRUCCIONES  llave_B   {console.error("---------FOR");}
;








IF : if parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES  llave_B ELSE_IF ELSE {console.error("---------IF");}
;

ELSE :  else llave_A  INSTRUCCIONES llave_B {console.error("---------ELSE");}
        |   
;

ELSE_IF : ELSE_IF elif parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES llave_B {console.error("---------ELIF");}
        |   
;



SWITCH : switch parentesis_A EXPRESION parentesis_B llave_A CASE DEFAULT llave_B  {console.error("---------SWITCH");}
;

DEFAULT :  default dos_puntos  INSTRUCCIONES  {console.error("---------DEFAULT");}
        |   
;

CASE : CASE case  EXPRESION dos_puntos INSTRUCCIONES {console.error("---------CASE");}
        |   
;

WHILE : while parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES llave_B {console.error("---------WHILE");}
;










MODIFICAR_VEC : IDENTIFICADORES corchete_A EXPRESION corchete_B igualacion EXPRESION punto_coma {console.error("--------------MODFICAR VEC");}
        | IDENTIFICADORES corchete_A EXPRESION corchete_B corchete_A EXPRESION corchete_B igualacion EXPRESION punto_coma {console.error("--------------MODFICAR VEC 2");}
;

DECLARACION : TIPO IDENTIFICADORES punto_coma {console.error("Declaracion");}
        | TIPO IDENTIFICADORES igualacion EXPRESION punto_coma {console.error("Declaracion");}
;

DL_VECTORES : TIPO corchete_A corchete_B IDENTIFICADORES igualacion llave_A LISTA_VALORES llave_B punto_coma {console.error("---------VECTOR DECLARACION 1 lista--------");}
        | TIPO corchete_A corchete_B corchete_A corchete_B IDENTIFICADORES igualacion llave_A  llave_A LISTA_VALORES llave_B coma llave_A LISTA_VALORES llave_B llave_B punto_coma {console.error("---------VECTOR DECLARACION 2 lsita-------");}
;

D_VECTORES : TIPO corchete_A corchete_B IDENTIFICADORES igualacion new TIPO  corchete_A EXPRESION corchete_B punto_coma {console.error("---------VECTOR DECLARACION 1--------");}
        | TIPO corchete_A corchete_B corchete_A corchete_B IDENTIFICADORES igualacion new TIPO  corchete_A EXPRESION corchete_B corchete_A EXPRESION corchete_B punto_coma {console.error("---------VECTOR DECLARACION 2-------");}
;

ASIGNACION : IDENTIFICADORES igualacion EXPRESION punto_coma {console.error("asignacion");}
;

CASTEO : parentesis_A TIPO parentesis_B OPERACION  
;



INCREMENTOS :  OPERACION incremento   
;

DECREMENTOS :  OPERACION decremento             
;




OPERACION : OPERACION OPERADORES VALORES
        | VALORES
;

OPERADORES : mas
        | menos
        | por
        | division
        | potencia
        | porcentaje
        | mayor_igual
        | menor_igual
        | mayor_que
        | menor_que
        | igual
        | diferente
        | or
        | and
        | igualacion
;

VALORES : numero
        | decimal
        | identificador
        | string
        | parentesis_A OPERACION parentesis_B
        | corchete_A OPERACION corchete_B
        | llave_A OPERACION llave_B
        | true
        | false 
        | char
        
;



TIPO : prchar
        | int
        | double
        | prstring
        | boolean
;



IDENTIFICADORES : IDENTIFICADORES coma identificador 
        |identificador
;