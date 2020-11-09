'use strict';

var cat, sbm, he, b, sf, m = '', s = '';

cat = prompt('Ingrese la categoría 1, 2 o 3');
he = parseFloat(prompt('Ingrese las horas extra'));

switch (cat) {
	case '1':
		sbm = 2000;
        he > 20 ? b = 500 : b = 0;
		break;
	case '2':
		sbm = 3000;
		b = 0;
		break;
	case '3':
		sbm = 4000;
		he > 30 ? b = 1000 : b = 0;
		break;
	default:
		sbm = 0;
		b = 0;
		break;
}

sf = sbm + b;
sf > 4000 ? s += 'supera' : s += 'no supera';
m += `El sueldo es u$s${sf} y ${s} los 4000`;

document.write(`<p style='color:red'>${m}</p>`);