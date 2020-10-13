'use strict';

var valorHora = parseFloat(prompt("Ingrese el valor por hora"));
var cantidadHoras = parseFloat(prompt("Ingrese la horas trabajadas en el mes"));
var antiguedadEmpleado = parseInt(prompt("Ingrese los años de antiguedad"));
var cantidadSeguros = parseInt(prompt("Ingrese la cantidad de seguros vendidos"));
var seguroCaro = parseFloat(prompt("Ingrese el valor del seguro mas caro vendido"));

var sueldoMensualInicial,
bonoSeguroCaro,
bonoCantidadSeguros,
bonoAntiguedad
valorPromedio,
sueldoTotal;

sueldoMensualInicial = valorHora * cantidadHoras;

bonoSeguroCaro = .50 * seguroCaro;

bonoCantidadSeguros = .25 * sueldoMensualInicial * cantidadSeguros;

bonoAntiguedad = .15 * sueldoMensualInicial * antiguedadEmpleado;

sueldoTotal = sueldoMensualInicial + bonoSeguroCaro + bonoCantidadSeguros + bonoAntiguedad;

valorPromedio = sueldoTotal / cantidadHoras;

document.write(`<p style="color: red"> El sueldo mensual del empleado de acuerdo a lo ingresado más los bonos correspondientes es de: $${sueldoTotal} y el valor promedio por hora es: $${valorPromedio}</p>`)