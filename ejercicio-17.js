

var letra, m = ''

letra = prompt('Ingrese una letra')

switch (letra) {
    case "a":
    case "A":
        m += "La letra ingresada es una vocal y en el primer lugar"
        break;
    case "e": 
    case "E":
        m += "La letra ingresada es una vocal y en el segundo lugar"
        break;
    case "i":
    case "I":
        m += "La letra ingresada es una vocal y en el tercer lugar"
        break;
    case "o":
    case "O":
        m += "La letra ingresada es una vocal y en el cuarto lugar"
        break;
    case "u":
    case "U":
        m += "La letra ingresada es una vocal y en el quinto lugar"
        break;
    default:
        m += 'La letra ingresada es una consonante';

}

document.write(`<p>${m}</p>`);
