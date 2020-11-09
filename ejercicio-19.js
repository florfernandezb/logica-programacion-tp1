'use strict';

// Realicemos la codificación a partir de aquí:
/*
var num1, num2, operador, res;

num1 = parseInt(prompt(`Ingrese el primer número.`));
num2 = parseInt(prompt(`Ingrese el segundo número.`));
operador = prompt(`Ingrese el operador (el signo de la operación que desea realizar).`);

switch (operador) {
	case `+`:
		res = `La suma de los valores ingresados es ${num1 + num2}.`;
		break;
	case `-`:
		res = `La resta de los valores ingresados es ${num1 - num2}.`;
		break;
	case `*`:
		res = `El producto de los valores ingresados es ${num1 * num2}.`;
		break;
	case `/`:
		res = `El cociente de los valores ingresados es ${num1 / num2}.`;
		break;
	default:
		res = `El operador ingresado es incorrecto`;
		break;
}

document.write(`<p>${res}</p>`);
*/

var num1, num2, operador, res, txt, m;

num1 = parseFloat(prompt(`Ingrese el primer número.`));
num2 = parseFloat(prompt(`Ingrese el segundo número.`));
operador = prompt(`Ingrese el operador (el signo de la operación que desea realizar).`);

switch (operador) {
	case `+`:
		txt = 'La suma';
		res = num1 + num2;
		break;
	case `-`:
		txt = 'La resta';
		res = num1 - num2;
		break;
	case `*`:
		txt = 'El producto';
		res = num1 * num2;
		break;
	case `/`:
		txt = 'El cociente';
		res = num1 / num2;
		break;
	default:
		txt = '';
		res = `El operador ingresado es incorrecto`;
		break;
}
/*
m = txt == '' ? res : `${txt} de los valores ingresados es ${res}`;
document.write(`<p>${m}</p>`);
//---
//Aqui abajo tienen todo en una sola línea:
*/
document.write(`<p style='color:red'>${txt == '' ? res : `${txt} de los valores ingresados es ${res}`}</p>`);