'use strict';

var nombre,
	apellido;

nombre = prompt(`Ingrese su nombre`);
apellido = prompt(`Ingrese su apellido`);

document.write(`<p style="color: red;">Bienvenido ${nombre} ${apellido}.</p>`);