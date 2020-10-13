'use strict';

// Realicemos la codificación a partir de aquí:

var valorHora,
	cantidadHoras,
	sueldo;

valorHora = parseFloat(prompt(`Ingrese el valor de la hora de trabajo`));
cantidadHoras = parseFloat(prompt(`Ingrese la cantidad de horas trabajadas`));

sueldo = cantidadHoras * valorHora;

document.write( `<p style="color: red;"> El sueldo a cobrar es $${sueldo} </p>` );