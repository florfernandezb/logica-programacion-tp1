'use strict';

var m = '';
var inicio = parseInt(prompt("Vamos a definir un rango.\nIngrese el primer número:"));
var final = parseInt(prompt("Ingrese el segundo número:"));
var num = parseInt(prompt("Ingrese un tercer número"));

if (final - inicio >= 5) {
	if (num >= inicio && num <= final) {
		m += "El número ingresado está dentro del rango";
		if (num != 0 && num % 2 == 0) {
			m += " y es par.";
		}
	} else {
		m += "El número ingresado no está detro del rango";
		if (num % 2 != 0) {
			m += " y es impar.";
		}
	}
} else {
	m += "El rango no es válido";
}

document.write(`<p style='color:red'>${m}</p>`);