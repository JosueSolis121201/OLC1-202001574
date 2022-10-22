%{
    const {OperacionBinaria} = require('../instrucciones/operacionBinaria.ts');
    const {Declaracion} = require('../instrucciones/declaracion.ts');
    const {Ternario} = require('../instrucciones/ternario.ts');
    const {Asignacion} = require('../instrucciones/asignacion.ts');
    const {Casteo} = require('../instrucciones/casteo.ts');
    const {Incremento} = require('../instrucciones/incremento.ts');
    const {VectorDeclarado_2D} = require('../instrucciones/vector_declarado_2D.ts');
    const {VectorDeclarado_1D} = require('../instrucciones/vector_declarado_1D.ts');
    const {DeclaracionListaVector_1D} = require('../instrucciones/declaracion_lista_vector_1D.ts');
    const {DeclaracionListaVector_2D} = require('../instrucciones/declaracion_lista_vector_2D.ts');
    const {Acceso_1D} = require('../instrucciones/acceso_vector_1D.ts');
    const {Acceso_2D} = require('../instrucciones/acceso_vector_2D.ts');
    const {VectorModificar_1D} = require('../instrucciones/vector_modificar_1D.ts');
    const {VectorModificar_2D} = require('../instrucciones/vector_modificar_2D.ts');
    const {Print} = require('../instrucciones/print.ts');
    const {Println} = require('../instrucciones/println.ts');
    const {If} = require('../instrucciones/if.ts');

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


S0 :  inicio S0P fin EOF  {console.log("TERMINE DE ANALIZAR EL PROYECTO C:");  {return $2;}}
        
;



S0P : S0P S1 { $1.push($2);  $$= $1;  } 
        | S1 {$$=[$1]} 
;

S1 : ESTRUCTURA {$$=$1;}
;

INSTRUCCIONES : INSTRUCCIONES ESTRUCTURA { $1.push($2);  $$= $1;  }
        | ESTRUCTURA {$$=[$1]} 
;

ESTRUCTURA : DECLARACION {$$=$1;}
        | ASIGNACION {$$=$1;}
        | D_VECTORES {$$=$1;}
        | DL_VECTORES {$$=$1;}  
        | MODIFICAR_VEC {$$=$1;}  
        | IF {$$=$1;}
        | PRINT {$$=$1;}
        | PRINTLN {$$=$1;}
        | SWITCH
        | WHILE
        | INCREMENTO_MINI {$$=$1;}
        | DECREMENTO_MINI {$$=$1;}
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
EXPRESION : OPERACION {$$=$1;}
        | CASTEO {$$=$1;}
        | INCREMENTOS {$$=$1;}
        | DECREMENTOS {$$=$1;}
        | menos numero {$$=$2;}
        | LOWER {$$=$1;}
        | UPPER {$$=$1;}
        | ROUND {$$=$1;}
        | LENGTH {$$=$1;}
        | TYPEOF {$$=$1;}
        | TOSTRING {$$=$1;}
        | TOCHARARRAY {$$=$1;}
        | LLAMADA_MINI {$$=$1;}
        | TERNARIO {$$=$1;}
        | ACCESO_VEC {$$=$1;}
;
ACCESO_VEC : identificador corchete_A numero corchete_B { $$= new Acceso_1D($1,$3,@1.first_line,@1.first_column);}
    | identificador corchete_A numero corchete_B corchete_A numero corchete_B  { $$= new Acceso_2D($1,$3,$6,@1.first_line,@1.first_column);}
;

TERNARIO : OPERACION interrogacion OPERACION dos_puntos OPERACION  { $$= new Ternario($1,$2,$3,$5,@1.first_line,@1.first_column);}
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

LISTA_VALORES : LISTA_VALORES coma VALORES { $1.push($3);  $$= $1;  }
        |VALORES {$$=[$1]} 
        
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

INCREMENTO_MINI : identificador incremento punto_coma { $$= new Incremento($1,$2,@1.first_line,@1.first_column);}
;

DECREMENTO_MINI : identificador decremento punto_coma { $$= new Incremento($1,$2,@1.first_line,@1.first_column);}
;

PRINT : print parentesis_A EXPRESION parentesis_B punto_coma { $$= new Print($1,$3,@1.first_line,@1.first_column);}
;

PRINTLN : println parentesis_A EXPRESION parentesis_B punto_coma { $$= new Println($1,$3,@1.first_line,@1.first_column);}
;


DO_ULTIL : do llave_A INSTRUCCIONES llave_B until parentesis_A OPERACION parentesis_B punto_coma  {console.error("---------DO_UNTIL");}
;

DO_WHILE : do llave_A INSTRUCCIONES llave_B while parentesis_A OPERACION parentesis_B punto_coma  {console.error("---------DO_WHILE");}
;

FOR : for parentesis_A ESTRUCTURA OPERACION punto_coma EXPRESION parentesis_B llave_A INSTRUCCIONES  llave_B   {console.error("---------FOR");}
;








IF : if parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES  llave_B ELSE_IF ELSE { $$= new If($3,$6,$8,$9,@1.first_line,@1.first_column);}
;

ELSE :  else llave_A  INSTRUCCIONES llave_B {console.error("---------ELSE");}
        |   
;

ELSE_IF : ELSE_IF elif parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES llave_B { $1.push($3);  $$= $1;  }
        |    {$$=[]} 
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










MODIFICAR_VEC : IDENTIFICADORES corchete_A EXPRESION corchete_B igualacion EXPRESION punto_coma { $$= new VectorModificar_1D($1,$3,$6,@1.first_line,@1.first_column);}
        | IDENTIFICADORES corchete_A EXPRESION corchete_B corchete_A EXPRESION corchete_B igualacion EXPRESION punto_coma { $$= new VectorModificar_2D($1,$3,$6,$9,@1.first_line,@1.first_column);}
;

DECLARACION : TIPO IDENTIFICADORES punto_coma { $$= new Declaracion($1,$2,@1.first_line,@1.first_column);}
        | TIPO IDENTIFICADORES igualacion EXPRESION punto_coma { $$= new Declaracion($1,$2,$4,@1.first_line,@1.first_column);}
;

DL_VECTORES : TIPO corchete_A corchete_B IDENTIFICADORES igualacion llave_A LISTA_VALORES llave_B punto_coma { $$= new DeclaracionListaVector_1D($1,$2,$3,$4,$7,@1.first_line,@1.first_column);}
        | TIPO corchete_A corchete_B corchete_A corchete_B IDENTIFICADORES igualacion llave_A  llave_A LISTA_VALORES llave_B coma llave_A LISTA_VALORES llave_B llave_B punto_coma { $$= new DeclaracionListaVector_2D($1,$2,$3,$4,$5,$6,$10,$14,@1.first_line,@1.first_column);}
;

D_VECTORES : TIPO corchete_A corchete_B IDENTIFICADORES igualacion new TIPO  corchete_A EXPRESION corchete_B punto_coma { $$= new VectorDeclarado_1D($1,$2,$3,$4,$7,$9,@1.first_line,@1.first_column);}
        | TIPO corchete_A corchete_B corchete_A corchete_B IDENTIFICADORES igualacion new TIPO  corchete_A EXPRESION corchete_B corchete_A EXPRESION corchete_B punto_coma { $$= new VectorDeclarado_2D($1,$2,$3,$4,$5,$6,$9,$11,$14,@1.first_line,@1.first_column);}
;

ASIGNACION : IDENTIFICADORES igualacion EXPRESION punto_coma { $$= new Asignacion($1,$3,@1.first_line,@1.first_column);}
;

CASTEO : parentesis_A TIPO parentesis_B OPERACION  { $$= new Asignacion($2,$4,@1.first_line,@1.first_column);} 
;



INCREMENTOS :  OPERACION incremento   { $$= new Incremento($1,$2,@1.first_line,@1.first_column);} 
;

DECREMENTOS :  OPERACION decremento   { $$= new Incremento($1,$2,@1.first_line,@1.first_column);}          
;




OPERACION : OPERACION OPERADORES VALORES { $$= new OperacionBinaria($1,$2,$3,@1.first_line,@1.first_column);}
        | VALORES {$$=$1;}
;

OPERADORES : mas {$$=$1;}
        | menos {$$=$1;}
        | por {$$=$1;}
        | division {$$=$1;}
        | potencia {$$=$1;}
        | porcentaje {$$=$1;}
        | mayor_igual {$$=$1;}
        | menor_igual {$$=$1;}
        | mayor_que {$$=$1;}
        | menor_que {$$=$1;}
        | igual {$$=$1;}
        | diferente {$$=$1;}
        | or {$$=$1;}
        | and {$$=$1;}
        | igualacion {$$=$1;}
;

VALORES : numero {$$=$1;}
        | decimal {$$=$1;}
        | identificador {$$=$1;}
        | string {$$=$1;}
        | parentesis_A OPERACION parentesis_B { $$= new OperacionBinaria($1,$2,$3,@1.first_line,@1.first_column);}
        | corchete_A OPERACION corchete_B { $$= new OperacionBinaria($1,$2,$3,@1.first_line,@1.first_column);}
        | llave_A OPERACION llave_B { $$= new OperacionBinaria($1,$2,$3,@1.first_line,@1.first_column);}
        | true {$$=$1;}
        | false {$$=$1;}
        | char {$$=$1;}
        
;



TIPO : prchar {$$=$1;}
        | int {$$=$1;}
        | double {$$=$1;}
        | prstring {$$=$1;}
        | boolean {$$=$1;}
;



IDENTIFICADORES : IDENTIFICADORES coma identificador  { $1.push($3);  $$= $1;  }
        |identificador {$$=[$1]} 
;