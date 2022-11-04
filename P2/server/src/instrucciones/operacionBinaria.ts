import { isObject } from "util";
import { Instruccion } from "../abstractas/instruccion";
import { TablaSimbolos } from "../datos/tabla_simbolos";
import { Valor } from "../datos/valor";

export class OperacionBinaria extends Instruccion {


    constructor(
        public izquierdo: any,
        public derecho: any,
        public signo: any,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(tabla:TablaSimbolos):any {
        // buscar  de en tabla de izuquiedo y derecho
        let izq:Valor = this.izquierdo.ejecutar(tabla);
        let der:Valor = this.derecho.ejecutar(tabla);

        let valDe:number
        switch (this.signo) {
            //SUMA (+)
            case "+":
                switch ( izq.tipo) {
                    case 1://Entero 
                        switch (der.tipo) {
                            case 1://entero mas entero = entero
                            console.log( parseInt(izq.valor) + parseInt(der.valor))
                                return new Valor( parseInt(izq.valor) + parseInt(der.valor), 1)
                            case 2://entero mas float = float
                                return new Valor( parseFloat(izq.valor) + parseFloat(der.valor), 2)
                            case 3://entero mas String = string
                                return new Valor( izq.valor.toString() + der.valor.toString(), 3)
                            case 4://entero mas boleano = entero //TODO
                                //TODO convertir
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                }else{
                                    valDe =1
                                }
                                // operar valores
                                return new Valor(izq.valor +valDe, 1)
                            case 5://entero mas char = entero
                                return new Valor( izq.valor.toString() + der.valor.toString(), 1)
                            default:
                                console.log("ERROR EN ENTERO +")
                                break;
                        }
                    case 2://float 
                        switch (der.tipo) {
                            case 1://float mas entero = float
                                return new Valor( parseFloat(izq.valor) + parseFloat(der.valor), 2)
                            case 2://float mas float = float
                                return new Valor( parseFloat(izq.valor) + parseFloat(der.valor), 2)
                            case 3://float mas String = string
                                return new Valor( izq.valor.toString() + der.valor.toString(), 3)
                            case 4://float mas boleano = float
                                return new Valor( parseFloat(izq.valor) + parseFloat(der.valor), 2)
                            case 5://float mas char = float
                                return new Valor( parseFloat(izq.valor) + parseFloat(der.valor), 2)
                            default:
                                console.log("ERROR EN float +")
                                break;
                        }
                    case 3://string 
                        switch (der.tipo) {
                            case 1://string mas entero = string
                                return new Valor( izq.valor.toString() + der.valor.toString(), 3)
                            case 2://string mas float = string
                                return new Valor( izq.valor.toString() + der.valor.toString(), 3)
                            case 3://string mas String = string
                                return new Valor( izq.valor.toString() + der.valor.toString(), 3)
                            case 4://string mas boleano = string
                                return new Valor( izq.valor.toString() + der.valor.toString(), 3)
                            case 5://string mas char = string
                                return new Valor( izq.valor.toString() + der.valor.toString(), 3)
                            default:
                                console.log("ERROR EN string +")
                                break;
                        }
                        console.log("ERROR EN string")

                    case 4://booleano 
                        switch (der.tipo) {
                            case 1://booleano mas entero = entero
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                }else{
                                    valDe =1
                                }
                                return new Valor( parseInt(izq.valor) +valDe, 1)
                            case 2://booleano mas float = float
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                }else{
                                    valDe =1
                                }
                                return new Valor(  parseFloat(izq.valor) + valDe, 2)
                            case 3://booleano mas String = string
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                }else{
                                    valDe =1
                                }
                                return new Valor( (izq.valor + der.valor).toString, 3)
                            default:
                                console.log("ERROR EN booleano +")
                                break;
                        }
                    case 5://char 
                        switch (der.tipo) {
                            case 1://char mas entero = entero
                                return new Valor( parseInt(izq.valor) + parseInt(der.valor), 1)
                            case 2://char mas float = float
                                return new Valor(parseFloat(izq.valor) + parseFloat(der.valor), 2)
                            case 3://char mas String = string
                                return new Valor( (izq.valor + der.valor).toString, 3)
                            case 5://char mas char = string
                                return new Valor( (izq.valor + der.valor).toString, 3)
                            default:
                                console.log("ERROR EN char +")
                                break;
                        }
                    default:
                        break; 
                }
                //! FIN DE SUMA
            //resta (-)
            case "-":
                switch ( izq.tipo) {
                    case 1://Entero 
                        switch (der.tipo) {
                            case 1://entero resta entero = entero
                                return new Valor( parseInt(izq.valor) - parseInt(der.valor), 1)
                            case 2://entero resta float = float
                                return new Valor( parseFloat(izq.valor) - parseFloat(der.valor), 2)
                            case 4://entero resta boleano = entero
                            if (der.valor.toString() == "false"){
                                valDe = 0
                            }else{
                                valDe =1
                            }
                                return new Valor( parseInt(izq.valor) - valDe, 1)
                            case 5://entero resta char = entero
                                return new Valor( parseInt(izq.valor) - parseInt(der.valor), 1)
                            default:
                                console.log("ERROR EN ENTERO -")
                                break;
                        }
                    case 2://float 
                        switch (der.tipo) {
                            case 1://float resta entero = float
                                return new Valor( parseFloat(izq.valor) - parseFloat(der.valor), 2)
                            case 2://float resta float = float
                                return new Valor( parseFloat(izq.valor) - parseFloat(der.valor), 2)
                            case 4://float resta boleano = float
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                }else{
                                    valDe =1
                                }
                                return new Valor( parseFloat(izq.valor) - valDe, 2)
                            case 5://float resta char = float
                                return new Valor( parseFloat(izq.valor) - parseFloat(der.valor), 2)
                            default:
                                console.log("ERROR EN float -")
                                break;
                        }
                        console.log("ERROR EN float")

                    case 4://booleano 
                        switch (der.tipo) {
                            case 1://booleano resta entero = entero
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                }else{
                                    valDe =1
                                }
                                return new Valor( parseInt(izq.valor) - valDe, 1)
                            case 2://booleano resta float = float
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                }else{
                                    valDe =1
                                }
                                return new Valor( parseFloat(izq.valor) - valDe, 2)
                            default:
                                console.log("ERROR EN booleano -")
                                break;
                        }
                    case 5://char 
                        switch (der.tipo) {
                            case 1://char resta entero = entero
                                return new Valor( parseInt(izq.valor) - parseInt(der.valor), 1)
                            case 2://char resta float = float
                                return new Valor( parseFloat(izq.valor) - parseFloat(der.valor), 2)
                            case 5://char resta char = string
                                return new Valor(parseInt(izq.valor) - parseInt(der.valor), 3)
                            default:
                                console.log("ERROR EN char -")
                                break;
                        }
                        //! fin resta
                    default:
                        break;
                }
            //multiplicar (*)    
            case "*":
                    switch (izq.tipo) {
                        case 1://Entero 
                            switch (der.tipo) {
                                case 1://entero multiplicar entero = entero
                                    return new Valor( parseInt(izq.valor) * parseInt(der.valor), 1)
                                case 2://entero multiplicar float = float
                                    return new Valor( parseFloat(izq.valor) *  parseFloat(der.valor), 2)
                                case 4://entero multiplicar boleano = entero
                                    if (der.valor.toString() == "false"){
                                        valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor( parseInt(izq.valor) * valDe, 1)
                                case 5://entero multiplicar char = entero
                                    return new Valor( parseInt(izq.valor) * parseInt(der.valor), 1)
                                default:
                                    console.log("ERROR EN ENTERO *")
                                    break;
                            }
                            console.log("ERROR EN ENTERO")

                        case 2://float 
                            switch (der.tipo) {
                                case 1://float multiplicar entero = float
                                    return new Valor( parseFloat(izq.valor) * parseFloat(der.valor), 2)
                                case 2://float multiplicar float = float
                                    return new Valor(  parseFloat(izq.valor) * parseFloat(der.valor), 2)
                                case 4://float multiplicar boleano = float
                                    return new Valor(  parseFloat(izq.valor) * parseFloat(der.valor), 2)
                                case 5://float multiplicar char =  float
                                    return new Valor( parseFloat(izq.valor) * parseFloat(der.valor), 2)
                                default:
                                    console.log("ERROR EN float *")
                                    break;
                            }
                            console.log("ERROR EN float")
    
                        case 4://booleano 
                            switch (der.tipo) {
                                case 1://booleano multiplicar entero = entero
                                    if (der.valor.toString() == "false"){
                                        valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor(parseInt(izq.valor) * valDe, 1)
                                case 2://booleano multiplicar float = float
                                    if (der.valor.toString() == "false"){
                                        valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor(parseFloat(izq.valor) * valDe, 2)
                                default:
                                    console.log("ERROR EN booleano *")
                                    break;
                            }
                            console.log("ERROR EN booleano")
    
                        case 5://char 
                            switch (der.tipo) {
                                case 1://char multiplicar entero = entero
                                    return new Valor( parseInt(izq.valor) * parseInt(der.valor), 1)
                                case 2://char multiplicar float = float
                                    return new Valor(parseFloat(izq.valor) * parseFloat(der.valor), 2)
                                case 5://char multiplicar char = string
                                    return new Valor( parseInt(izq.valor) * parseInt(der.valor), 1)
                                default:
                                    console.log("ERROR EN char *")
                                    break;
                            }
                            console.log("ERROR EN char")
                            //! fin multiplicacion
                            }
            //dividor (/)
            case "/":
                    switch ( izq.tipo) {
                        case 1://Entero 
                            switch (der.tipo) {
                                case 1://entero dividor entero = entero
                                    return new Valor(parseFloat(izq.valor) / parseFloat(der.valor), 2)
                                case 2://entero dividor float = float
                                    return new Valor( parseFloat(izq.valor) / parseFloat(der.valor), 2)
                                case 4://entero dividor boleano = entero
                                    if (der.valor.toString() == "false"){
                                    valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor( parseFloat(izq.valor) / valDe, 2)
                                case 5://entero dividor char = enter
                                    return new Valor( parseFloat(izq.valor) / parseFloat(der.valor), 2)
                                default:
                                    console.log("ERROR EN ENTERO /")
                                    break;
                            }
                            console.log("ERROR EN ENTERO")
    
                        case 2://float 
                            switch (der.tipo) {
                                case 1://float dividor entero = float
                                    return new Valor( parseFloat(izq.valor) / parseFloat(der.valor), 2)
                                case 2://float dividor float = float
                                    return new Valor( parseFloat(izq.valor) / parseFloat(der.valor), 2)
                                case 4://float dividor boleano = float
                                    if (der.valor.toString() == "false"){
                                    valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor( parseFloat(izq.valor) / valDe, 2)
                                case 5://float dividor char = float
                                    return new Valor( parseFloat(izq.valor) / parseFloat(der.valor), 2)
                                default:
                                    console.log("ERROR EN float /")
                                    break;
                            }
                            console.log("ERROR EN float")
    
                        case 4://booleano 
                            switch (der.tipo) {
                                case 1://booleano dividor entero = float
                                    if (der.valor.toString() == "false"){
                                    valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor( parseFloat(izq.valor) / valDe, 2)
                                case 2://booleano dividor float = float
                                if (der.valor.toString() == "false"){
                                    valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor(parseFloat(izq.valor) / valDe, 2)
                                default:
                                    console.log("ERROR EN booleano /")
                                    break;
                            }
                            console.log("ERROR EN booleano")
    
                        case 5://char 
                            switch (der.tipo) {
                                case 1://char dividor entero = float
                                    return new Valor(parseInt(izq.valor) / parseInt(der.valor), 2)
                                case 2://char dividor float = float
                                    return new Valor( parseInt(izq.valor) / parseInt(der.valor), 2)
                                case 5://char dividor char = float
                                    return new Valor( parseInt(izq.valor) / parseInt(der.valor), 2)
                                default:
                                    console.log("ERROR EN char /")
                                    break;
                            }
                            console.log("ERROR EN char")
                            //! fin dividor
                            }
            //potencia (^)                   
            case "^":
                    switch ( izq.tipo) {
                        case 1://Entero 
                            switch (der.tipo) {
                                case 1://entero potencia entero = entero
                                    return new Valor(parseInt(izq.valor) ** parseInt(der.valor), 1)
                                case 2://entero potencia float = float
                                    return new Valor(  parseFloat(izq.valor) ** parseFloat(der.valor), 2)
                                case 4://entero potencia boleano = entero
                                    if (der.valor.toString() == "false"){
                                    valDe = 0
                                    }else{
                                        valDe =1
                                    }
                                    return new Valor( parseInt(izq.valor) ** valDe, 1)
                                default:
                                    console.log("ERROR EN ENTERO ^")
                                    break;
                            }
                            console.log("ERROR EN ENTERO")
    
                        case 2://float 
                            switch (der.tipo) {
                                case 1://float potencia entero = float
                                    return new Valor( parseFloat(izq.valor) ** parseFloat(der.valor), 2)
                                case 2://float potencia float = float
                                    return new Valor( parseFloat(izq.valor) ** parseFloat(der.valor), 2)
                                case 4://float potencia boleano = float
                                         if (der.valor.toString() == "false"){
                                        valDe = 0
                                        }else{
                                            valDe =1
                                        }
                                    return new Valor( parseFloat(izq.valor) ** valDe, 2)
                                default:
                                    console.log("ERROR EN float ^")
                                    break;
                            }
                            console.log("ERROR EN float")
    
                        case 4://booleano 
                            switch (der.tipo) {
                                case 1://booleano potencia entero = entero
                                     if (der.valor.toString() == "false"){
                                        valDe = 0
                                        }else{
                                            valDe =1
                                        }
                                    return new Valor( parseInt(izq.valor) ** valDe, 1)
                                case 2://booleano potencia float = float
                                         if (der.valor.toString() == "false"){
                                        valDe = 0
                                        }else{
                                            valDe =1
                                        }
                                    return new Valor(parseFloat(izq.valor) ** valDe, 2)
                                case 4://booleano potencia boleano = entero
                                    if (der.valor.toString() == "false"){
                                        valDe = 0
                                        }else{
                                            valDe =1
                                        }
                                    return new Valor( parseInt(izq.valor) ** valDe, 1)
                                default:
                                    console.log("ERROR EN booleano ^")
                                    break;
                            }
                            //! fin potencia
                            }
            //modulo (%)                    
            case "%":
                    switch (izq.tipo) {
                        case 1://Entero 
                            switch (der.tipo) {
                                case 1://entero potencia entero = entero
                                    return new Valor( parseFloat(izq.valor) % parseFloat(der.valor), 2)
                                case 2://entero potencia float = float
                                    return new Valor( parseFloat(izq.valor) % parseFloat(der.valor), 2)
                                default:
                                    console.log("ERROR EN ENTERO %")
                                    break;
                            }
                            console.log("ERROR EN ENTERO")
    
                        case 2://float 
                            switch (der.tipo) {
                                case 1://float potencia entero = float
                                    return new Valor( parseFloat(izq.valor) % parseFloat(der.valor), 2)
                                case 2://float potencia float = float
                                    return new Valor( parseFloat(izq.valor) % parseFloat(der.valor), 2)
                                default:
                                    console.log("ERROR EN float %")
                                    break;
                            }
                            console.log("ERROR EN float")
                            //! fin p%
                            }
            //Mayor
            case ">":
                switch ( izq.tipo) {
                    case 1://Entero 
                        switch (der.tipo) {
                            case 1://entero Mayor entero = bol
                            if (parseInt(izq.valor) > parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 2://entero Mayor entero = bol
                            if (parseFloat(izq.valor) > parseFloat(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 5://entero Mayor char = entero
                            if (parseInt(izq.valor) > parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN ENTERO >")
                                break;
                        }
                        console.log("ERROR EN ENTERO")

                    case 2://float 
                        switch (der.tipo) {
                            case 1://entero Mayor entero = bol
                            if (parseInt(izq.valor) > parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 2://entero Mayor entero = bol
                            if (parseFloat(izq.valor) > parseFloat(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 5://entero Mayor char = entero
                            if (parseInt(izq.valor) > parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN float >")
                                break;
                        }

                    case 5://char 
                        switch (der.tipo) {
                            case 1://entero Mayor entero = bol
                            if (parseInt(izq.valor) > parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 2://entero Mayor entero = bol
                            if (parseFloat(izq.valor) > parseFloat(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 5://entero Mayor char = entero
                            if (parseInt(izq.valor) > parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN char >")
                                break;
                        
                        }
                        console.log("ERROR EN char")
                    default:
                        break;
                }
            // menor
            case "<":
                switch (izq.tipo) {
                    case 1://Entero 
                        switch (der.tipo) {
                            case 1://entero menor entero = bol
                            if (parseInt(izq.valor) < parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 2://entero Mayor entero = bol
                            if (parseFloat(izq.valor) < parseFloat(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 5://entero Mayor char = entero
                            if (parseInt(izq.valor) < parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN ENTERO <")
                                break;
                        }
                        console.log("ERROR EN ENTERO")

                    case 2://float 
                        switch (der.tipo) {
                            case 1://entero Mayor entero = bol
                            if (parseInt(izq.valor) < parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 2://entero Mayor entero = bol
                            if (parseFloat(izq.valor) < parseFloat(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 5://entero Mayor char = entero
                            if (parseInt(izq.valor) < parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN floa< ")
                                break;
                        }

                    case 5://char 
                        switch (der.tipo) {
                            case 1://entero Mayor entero = bol
                            if (parseInt(izq.valor) < parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 2://entero Mayor entero = bol
                            if (parseFloat(izq.valor) < parseFloat(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor( valDe, 4)
                            case 5://entero Mayor char = entero
                            if (parseInt(izq.valor) < parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN char <")
                                break;
                        
                        }
                    default:
                        break;
                }
                //! menor

            // mayor o igual
            case ">=":
            switch ( izq.tipo) {
                case 1://Entero 
                    switch (der.tipo) {
                        case 1://entero menor entero = bol
                        if (parseInt(izq.valor) >= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 2://entero Mayor entero = bol
                        if (parseFloat(izq.valor) >= parseFloat(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 5://entero Mayor char = entero
                        if (parseInt(izq.valor) >= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor(valDe, 4)
                        default:
                            console.log("ERROR EN ENTERO >=")
                            break;
                    }
                    console.log("ERROR EN ENTERO")

                case 2://float 
                    switch (der.tipo) {
                        case 1://entero Mayor entero = bol
                        if (parseInt(izq.valor) >= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 2://entero Mayor entero = bol
                        if (parseFloat(izq.valor) >= parseFloat(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 5://entero Mayor char = entero
                        if (parseInt(izq.valor) >= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor(valDe, 4)
                        default:
                            console.log("ERROR EN floa >= ")
                            break;
                    }

                case 5://char 
                    switch (der.tipo) {
                        case 1://entero Mayor entero = bol
                        if (parseInt(izq.valor) >= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 2://entero Mayor entero = bol
                        if (parseFloat(izq.valor) >= parseFloat(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 5://entero Mayor char = entero
                        if (parseInt(izq.valor) >= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor(valDe, 4)
                        default:
                            console.log("ERROR EN char >=")
                            break;
                    
                    }
                default:
                    break;
            }
            //! maoyr o igual


            // menor o igual
            case "<=":
            switch ( izq.tipo) {
                case 1://Entero 
                    switch (der.tipo) {
                        case 1://entero menor entero = bol
                        if (parseInt(izq.valor) <= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 2://entero Mayor entero = bol
                        if (parseFloat(izq.valor) <= parseFloat(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 5://entero Mayor char = entero
                        if (parseInt(izq.valor) <= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor(valDe, 4)
                        default:
                            console.log("ERROR EN ENTERO <=")
                            break;
                    }
                    console.log("ERROR EN ENTERO")

                case 2://float 
                    switch (der.tipo) {
                        case 1://entero Mayor entero = bol
                        if (parseInt(izq.valor) <= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 2://entero Mayor entero = bol
                        if (parseFloat(izq.valor) <= parseFloat(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 5://entero Mayor char = entero
                        if (parseInt(izq.valor) <= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor(valDe, 4)
                        default:
                            console.log("ERROR EN floa <= ")
                            break;
                    }

                case 5://char 
                    switch (der.tipo) {
                        case 1://entero Mayor entero = bol
                        if (parseInt(izq.valor) <= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 2://entero Mayor entero = bol
                        if (parseFloat(izq.valor) <= parseFloat(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor( valDe, 4)
                        case 5://entero Mayor char = entero
                        if (parseInt(izq.valor) <= parseInt(der.valor)){
                            valDe = 1
                        }else{
                            valDe =0
                        }
                            return new Valor(valDe, 4)
                        default:
                            console.log("ERROR EN char <=")
                            break;
                    
                    }
                default:
                    break;
            }
            //! menor o igual

            //igual (==)
            case "==":
                switch ( izq.tipo) {
                    case 1://Entero 
                        switch (der.tipo) {
                            case 1://entero igual entero = entero
                            if (parseInt(izq.valor) == parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 2://entero igual float = float
                            if (parseInt(izq.valor) == parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN ENTERO ==")
                                break;
                        }
                        console.log("ERROR EN ENTERO")

                    case 2://float 
                        switch (der.tipo) {
                            case 1://entero igual entero = entero
                            if (parseInt(izq.valor) == parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 2://entero igual entero = entero
                            if (parseInt(izq.valor) == parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN float ==")
                                break;
                        }
                        console.log("ERROR EN float")

                    case 3://string 
                        switch (der.tipo) {
                            case 3://entero igual entero = entero
                            if (izq.valor.toString == der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 5://string igual char = string
                            if (izq.valor.toString == der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN string ==")
                                break;
                        }
                        console.log("ERROR EN string")

                    case 4://booleano 
                        switch (der.tipo) {
                            case 4://booleano igual boleano = //?
                            if (izq.valor.toString == der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN booleano ==")
                                break;
                        }
                        console.log("ERROR EN booleano")

                    case 5://char 
                        switch (der.tipo) {
                            case 3://entero igual entero = entero
                            if (izq.valor.toString == der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 5://string igual char = string
                            if (izq.valor.toString == der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN char ==")
                                break;
                        }
                        console.log("ERROR EN char")
                
                    default:
                        break;
                }
                //! FIN DE ==

            //igual (!=)
            case "!=":
                switch ( izq.tipo) {
                    case 1://Entero 
                        switch (der.tipo) {
                            case 1://entero igual entero = entero
                            if (parseInt(izq.valor) != parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 2://entero igual float = float
                            if (parseInt(izq.valor) != parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN ENTERO !=")
                                break;
                        }
                        console.log("ERROR EN ENTERO")

                    case 2://float 
                        switch (der.tipo) {
                            case 1://entero igual entero = entero
                            if (parseInt(izq.valor) != parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 2://entero igual entero = entero
                            if (parseInt(izq.valor) != parseInt(der.valor)){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN float!=")
                                break;
                        }
                        console.log("ERROR EN float")

                    case 3://string 
                        switch (der.tipo) {
                            case 3://entero igual entero = entero
                            if (izq.valor.toString != der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 5://string igual char = string
                            if (izq.valor.toString != der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN string !=")
                                break;
                        }
                        console.log("ERROR EN string")

                    case 4://booleano 
                        switch (der.tipo) {
                            case 4://booleano igual boleano = //?
                            if (izq.valor.toString != der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN booleano !=")
                                break;
                        }
                        console.log("ERROR EN booleano")

                    case 5://char 
                        switch (der.tipo) {
                            case 3://entero igual entero = entero
                            if (izq.valor.toString != der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            case 5://string igual char = string
                            if (izq.valor.toString != der.valor.toString){
                                valDe = 1
                            }else{
                                valDe =0
                            }
                                return new Valor(valDe, 4)
                            default:
                                console.log("ERROR EN char !=")
                                break;
                        }
                        console.log("ERROR EN char")
                
                    default:
                        break;
                }
                //! FIN DE !=
    } 
    
    


    }


    public graficar(): any {

        let padre =this.ID+"[label=\""+" Operadores "+"\"] \n";
        let hijo1 = this.izquierdo.graficar();
        let hijo2 = this.derecho.graficar();
        let hijo3 = this.ID+"ACCC"+"[label=\""+this.signo+"\"] \n";

        let retornar= padre+ hijo1+hijo2+hijo3;

        retornar=retornar+this.ID +"->"+this.derecho.ID+"\n"
        retornar=retornar+this.ID +"->"+this.izquierdo.ID+"\n"
        retornar=retornar+this.ID +"->"+this.ID+"ACCC"+"\n"
        
        return retornar;
        
    }
    public imprimir(): any {
        console.log("Encontre una operacion binaria, tipo:"+this.izquierdo+" nombre:"+this.signo+" lo encontre en la linea "+this.derecho);
    }
}