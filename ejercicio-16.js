'use strict'

var numero = parseInt(prompt('Ingrese un número'));
var resultado = '';

if (numero % 3 == 0) {

	if (numero % 5 == 0) {
		resultado += `<p>El número ${numero} es múltiplo de 3 y de 5 </p>`;
		console.log("primero");

	} else {
		resultado += `<p>El número ${numero} es múltiplo solo de 3 y no de 5</p>`;
		console.log("segundo");
	}

} else {

	if (numero % 5 == 0) {
		resultado += `<p>El número ${numero} es múltiplo unicamente de 5</p>`;
		console.log("tres");
	} else {
		resultado += `<p>El número ${numero} no es múltiplo 3 ni de 5</p>`;
	}
	
};

document.write(resultado);