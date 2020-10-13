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


// if(numero == 0){
//     resultado = 'cero'
//     mensaje(resultado)
// }

// if(numero % 2 == 0){
//     resultado = 'par'
//     mensaje(resultado)
// } else {
//     resultado = 'impar'
//     mensaje(resultado)
// }

// function mensaje(){
//     return document.write(`<p style = "color: red">El valor ingresado es: ${resultado}</p>`)
// }
