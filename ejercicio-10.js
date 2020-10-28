'use strict';

var diametro,
    radio,
    parimetro,
    area;

diametro = parseFloat(prompt("Ingrese el diametro el cuadrado"));

radio = diametro / 2;

perimetro = 2 * Math.PI * radio;

area = Math.PI * radio ** 2;

alert(`El perimetro del circulo es: ${perimetro} y el área del circulo es: ${area}`);

var pi = 3.1416;

perimetro = 2 * pi * radio;

area = pi * radio ** 2;

document.write(`<p style="color: red;">El perímetro del círculo es de ${perimetro} y el área del círculo es de ${area}</p>`);