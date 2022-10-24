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
    const {Elif} = require('../instrucciones/elif.ts');
    const {Else} = require('../instrucciones/else.ts');
    const {If_lista} = require('../instrucciones/if_lista.ts');
    const {Valor} = require('../datos/valor.ts');
    const {Primitivos} = require('../instrucciones/primitivos.ts');
    const {Identificadores_lista} = require('../instrucciones/lista_identificadores.ts');
    const {Case} = require('../instrucciones/case.ts');
    const {Default} = require('../instrucciones/default.ts');
    const {Case_list} = require('../instrucciones/lista_case.ts');
    const {Switch} = require('../instrucciones/switch.ts');
    const {While} = require('../instrucciones/while.ts');
    const {For} = require('../instrucciones/for.ts');
    const {DoWhile} = require('../instrucciones/do_while.ts');
    const {DoUntil} = require('../instrucciones/do_until.ts');
    const {Break} = require('../instrucciones/break.ts');
    const {Continue} = require('../instrucciones/continue.ts');
    const {Return} = require('../instrucciones/return.ts');
    const {Metodo} = require('../instrucciones/metodo.ts');
    const {MetodoVoid} = require('../instrucciones/metodo_void.ts');
    const {Funcion} = require('../instrucciones/funcion.ts');
    const {Parametros_list} = require('../instrucciones/lista_parametros.ts');
    const {Parametros} = require('../instrucciones/parametros.ts');
    const {Llamada} = require('../instrucciones/llamada.ts');
    const {LlamadaSinParamaetros} = require('../instrucciones/llamada_sin_parametros.ts');
    const {ToLower} = require('../instrucciones/lower.ts');
    const {ToUpper} = require('../instrucciones/upper.ts');
    const {Round} = require('../instrucciones/round.ts');
    const {Length} = require('../instrucciones/length.ts');
    const {Typeof} = require('../instrucciones/typeof.ts');
    const {ToString} = require('../instrucciones/string.ts');
    const {ToCharArray} = require('../instrucciones/chararray.ts');
    const {Push} = require('../instrucciones/push.ts');
    const {Run} = require('../instrucciones/run.ts');
    const {RunSinParametros} = require('../instrucciones/run_sin_parametros.ts');
    const {Pop} = require('../instrucciones/pop.ts');

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
        | SWITCH {$$=$1;}
        | WHILE {$$=$1;}
        | INCREMENTO_MINI {$$=$1;}
        | DECREMENTO_MINI {$$=$1;}
        | FOR {$$=$1;}
        | DO_WHILE {$$=$1;}
        | DO_ULTIL {$$=$1;}
        | BREAK {$$=$1;}
        | CONTINUE {$$=$1;}
        | RETURN {$$=$1;}
        | FUNCION {$$=$1;}
        | METODO {$$=$1;}
        | PUSH
        | POP
        | RUN
        | LLAMADA {$$=$1;}
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

LLAMADA_MINI : identificador parentesis_A LISTA_VALORES parentesis_B { $$= new Llamada($1,$3,@1.first_line,@1.first_column);}
        | identificador parentesis_A  parentesis_B { $$= new LlamadaSinParamaetros($1,@1.first_line,@1.first_column);}
;

LLAMADA : identificador parentesis_A LISTA_VALORES parentesis_B punto_coma { $$= new Llamada($1,$3,@1.first_line,@1.first_column);}
;

RUN : run identificador parentesis_A parentesis_B punto_coma { $$= new RunSinParametros($2,@1.first_line,@1.first_column);}
        | run identificador parentesis_A LISTA_VALORES parentesis_B  punto_coma { $$= new Run($2,$3,@1.first_line,@1.first_column);}
;

POP : identificador punto pop parentesis_A parentesis_B punto_coma { $$= new Pop($1,@1.first_line,@1.first_column);}
;

PUSH : identificador punto push parentesis_A EXPRESION parentesis_B punto_coma { $$= new Push($1,$5,@1.first_line,@1.first_column);}
;

TOCHARARRAY : toCharArray parentesis_A EXPRESION parentesis_B { $$= new ToCharArray($3,@1.first_line,@1.first_column);}
;

TOSTRING : tostring parentesis_A EXPRESION parentesis_B { $$= new ToString($3,@1.first_line,@1.first_column);}
;

TYPEOF : typeof parentesis_A EXPRESION parentesis_B { $$= new Typeof($3,@1.first_line,@1.first_column);}
;

LENGTH : length parentesis_A EXPRESION parentesis_B { $$= new Length($3,@1.first_line,@1.first_column);}
;

ROUND : round parentesis_A EXPRESION parentesis_B { $$= new Round($3,@1.first_line,@1.first_column);}
;

UPPER : toUpper parentesis_A EXPRESION parentesis_B { $$= new ToUpper($3,@1.first_line,@1.first_column);}
;

LOWER : toLower parentesis_A EXPRESION parentesis_B { $$= new ToLower($3,@1.first_line,@1.first_column);}
;

LISTA_VALORES : LISTA_VALORES coma VALORES { $1.push($3);  $$= $1;  }
        |VALORES {$$=[$1]} 
        
;


 
METODO : identificador parentesis_A PARAMETROS parentesis_B dos_puntos void llave_A INSTRUCCIONES llave_B { $$= new MetodoVoid($1,$3,$6,$8,@1.first_line,@1.first_column);}
        | identificador parentesis_A PARAMETROS parentesis_B llave_A INSTRUCCIONES llave_B { $$= new Metodo($1,$3,$6,@1.first_line,@1.first_column);}
;
        
FUNCION : identificador parentesis_A PARAMETROS parentesis_B dos_puntos TIPO llave_A INSTRUCCIONES llave_B  { $$= new Funcion($1,$3,$6,$8,@1.first_line,@1.first_column);}
;

PARAMETROS: PARAMETROS coma TIPO identificador { $$= $1;  $1.agregar( new Parametros($3,$4,@1.first_line,@1.first_column) );  }
        | TIPO identificador { $$= new Parametros_list(@1.first_line,@1.first_column);} 
        | { $$= new Parametros_list(@1.first_line,@1.first_column);}
;




RETURN : return punto_coma { $$= new Return($1,@1.first_line,@1.first_column);}
        | return EXPRESION punto_coma { $$= new Return($2,@1.first_line,@1.first_column);}
;
CONTINUE : continue punto_coma { $$= new Continue($1,@1.first_line,@1.first_column);}
;

BREAK : break punto_coma { $$= new Break($1,@1.first_line,@1.first_column);}
;

INCREMENTO_MINI : identificador incremento punto_coma { $$= new Incremento($1,$2,@1.first_line,@1.first_column);}
;

DECREMENTO_MINI : identificador decremento punto_coma { $$= new Incremento($1,$2,@1.first_line,@1.first_column);}
;

PRINT : print parentesis_A EXPRESION parentesis_B punto_coma { $$= new Print($1,$3,@1.first_line,@1.first_column);}
;

PRINTLN : println parentesis_A EXPRESION parentesis_B punto_coma { $$= new Println($1,$3,@1.first_line,@1.first_column);}
;


DO_ULTIL : do llave_A INSTRUCCIONES llave_B until parentesis_A OPERACION parentesis_B punto_coma  {$$ = new DoUntil($3,$7,@1.first_line,@1.first_column);}
;

DO_WHILE : do llave_A INSTRUCCIONES llave_B while parentesis_A OPERACION parentesis_B punto_coma  {$$ = new DoWhile($3,$7,@1.first_line,@1.first_column);}
;

FOR : for parentesis_A ESTRUCTURA OPERACION punto_coma EXPRESION parentesis_B llave_A INSTRUCCIONES  llave_B   {$$ = new For($3,$4,$6,$9,@1.first_line,@1.first_column);}
;








IF : if parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES  llave_B ELSE_IF ELSE { $$= new If($3,$6,$8,$9,@1.first_line,@1.first_column);}
;

ELSE :  else llave_A  INSTRUCCIONES llave_B { $$= new Else($3,@1.first_line,@1.first_column);}
        |   
;

ELSE_IF : ELSE_IF elif parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES llave_B { $$= $1;  $1.agregar( new Elif($4,$7) );  }
        |  { $$= new If_lista(@1.first_line,@1.first_column);}
;



SWITCH : switch parentesis_A EXPRESION parentesis_B llave_A CASE DEFAULT llave_B  { $$= new Switch($3,$6,$7,@1.first_line,@1.first_column);}
;

DEFAULT :  default dos_puntos  INSTRUCCIONES  { $$= new Default($3,@1.first_line,@1.first_column);}
        |   
;

CASE : CASE case  EXPRESION dos_puntos INSTRUCCIONES { $$= $1;  $1.agregar( new Case($3,$5) );  }
        | { $$= new Case_list(@1.first_line,@1.first_column);}  
;

WHILE : while parentesis_A EXPRESION parentesis_B llave_A INSTRUCCIONES llave_B { $$= new While($3,$6,@1.first_line,@1.first_column);}  
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

CASTEO : parentesis_A TIPO parentesis_B OPERACION  { $$= new Casteo($2,$4,@1.first_line,@1.first_column);} 
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

VALORES : numero { $$=new Primitivos(new Valor($1,1),@1.first_line,@1.first_column);}
        | decimal { $$=new Primitivos(new Valor($1,2),@1.first_line,@1.first_column);}
        | identificador {$$=$1;}
        | string { $$=new Primitivos(new Valor($1,3),@1.first_line,@1.first_column);}
        | parentesis_A OPERACION parentesis_B {$$= $2;}
        | corchete_A OPERACION corchete_B {$$=$2;}
        | llave_A OPERACION llave_B {$$=$2;}
        | true { $$=new Primitivos(new Valor($1,4),@1.first_line,@1.first_column);}
        | false { $$=new Primitivos(new Valor($1,4),@1.first_line,@1.first_column);}
        | char { $$=new Primitivos(new Valor($1,5),@1.first_line,@1.first_column);}
        
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