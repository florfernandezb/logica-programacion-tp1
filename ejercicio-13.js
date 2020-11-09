'use strict';

//Declaración de variables
var valorHora, // 10
	cantidadHoras, // 10
	antiguedadEmpleado, // 10
	bono,
	sueldoMensual;

//Ingreso de valores de usuario
valorHora = parseInt(prompt('Ingrese el monto por hora: '));
console.log('Valor ingresado en la variable monto por hora:', valorPorHora);

cantidadHoras = parseInt(prompt('Ingrese la cantidad total de horas trabajadas en el mes: '));
console.log('Valor ingresado en la variable cantida de Horas:',cantidadDeHoras);

antiguedadEmpleado = parseInt(prompt('Ingrese la cantidad de años de antiguedad del empleado: '));
console.log('Valor ingresado en la variable antiguedad empleado:',antiguedadEmpleado);

//Lógica de aplicación:
sueldoMensual = valorPorHora * cantidadDeHoras; // 100
// bono igual al 15% del sueldo basico por los años de antigüedad:
bono = .15 * sueldo *  antiguedadEmpleado; // 150
//sueldoMensual = sueldoMensual + bono;
sueldoMensual += bono;

//sueldoMensual = (valorPorHora * cantidadDeHoras) + .15 * (valorPorHora * cantidadDeHoras) * antiguedadEmpleado;
sueldoMensual = valorPorHora * cantidadDeHoras + .15 * valorPorHora * cantidadDeHoras * antiguedadEmpleado;

//Display de resultado
document.write(`<p style='color:red'>El sueldo mensual del empleado de acuerdo a lo ingresado es: ${sueldoMensual}</p>`);