'use strict';

var numero,
    algo;

var resultado = ''

numero= parseInt(prompt("Ingrese un numero"));

if(numero == 0){
    resultado += 'El numero es cero'
} else {
    
    if(numero % 2 == 0){
        resultado += 'El numero es par '
    } else {
        resultado += 'El numero es impar '
    }
}



document.write(`<p style = "color: red"> ${resultado}</p>`)