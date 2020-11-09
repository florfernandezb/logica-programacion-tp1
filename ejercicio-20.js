'use strict'
var lado1, lado2, lado3, mensaje = "El triángulo es "

lado1 = parseFloat(prompt("Ingrese el Lado 1"))
lado2 = parseFloat(prompt("Ingrese el Lado 2"))
lado3 = parseFloat(prompt("Ingrese el Lado 3"))

if(lado1 == lado2) {
    if(lado2 == lado3){
        mensaje += "es equilátero"
    } else {
    	 mensaje += "Es isósceles"
    }
} else if (lado2 == lado3) {
	 mensaje += "es isósceles"
} else if(lado3 == lado1) {
    mensaje += "es isósceles"
} else {
    mensaje += "es escaleno"
}

document.write(`<p style='color:red'>${mensaje}</p>`)