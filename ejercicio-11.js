'use strict';

var n1,
	n2,
	n3,
	n4,
	promedio,
	suma;

n1 = parseInt(prompt("Ingrese el primer número"));
n2 = parseInt(prompt("Ingrese el segundo número"));
n3 = parseInt(prompt("Ingrese el tercer número"));
n4 = parseInt(prompt("Ingrese el cuarto número"));

suma = n1 + n2 + n3 + n4;
promedio = suma / 4;

document.write(`<p style="color: red;">La suma total ${suma} y el promedio es ${promedio}</p>`);