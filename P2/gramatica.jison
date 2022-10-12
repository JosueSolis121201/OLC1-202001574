%{
    //here variables , JS
    var flag=0;
%}


%lex

%%


//simbolos o palabras reservadas
(\/\/[^\n]*\n)      {  }
(\/\*[^*\/]*\*\/)    {  }    



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
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'int';   
}

"double"      {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'double';   
}

"char"      {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'prchar';   
}

"string"        {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
        return 'prstring';   
}

"boolean"        {
                console.log("Reconocio un simbolo reservado, coma. Con lexema: "+ yytext);
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

"switch"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'switch';   
}

"case"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'case';   
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

"printnl"        {
                console.log("Reconocio un simbolo reservado, coma. Con : "+ yytext);
        return 'printnl';   
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

"run"        {
        return 'run';   
}

"tostring"        {
        return 'tostring';   
}

[a-zA-Z0-9_]+      {
        return 'identificador';   
}


"inicio" {return 'inicio'}
"fin"    {return 'fin'}










[ \r\t]+     { /*estos caracteres se omiten*/  }
\n          { /*estos caracteres se omiten*/  }





<<EOF>>      return 'EOF'; 


.          {console.log("Este es un error lexico "+yytext)}

/lex


%start BLOQUE



%%


//gramaticas


INICIAR :  inicio BLOQUE fin EOF  {console.log("TERMINE DE ANALIZAR EL PROYECTO C:");}
        | error EOF   {console.log("Error sintactico"+ $0)}
;



BLOQUE : if EOF
;