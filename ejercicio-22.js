'use strict'

var numero = parseInt(prompt('Ingrese un número'));
var resultado = '';

if (numero % 3 == 0 && numero % 5 == 0 && numero != 0) {

	resultado += `<p>El número ${numero} es múltiplo de 3 y de 5 </p>`;

} else if (numero % 3 == 0 && numero % 5 != 0) {

	resultado += `<p>El número ${numero} es múltiplo unicamente de 3</p>`;

} else if (numero % 3 != 0 && numero % 5 == 0) {

	resultado += `<p>El número ${numero} es múltiplo unicamente de 5</p>`;

} else {

	resultado += `<p>El número ${numero} no es múltiplo 3 ni de 5</p>`;

}

document.write(`<p style='color:red'>${resultado}</p>`);