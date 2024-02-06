let number1 = +prompt("Ingrese un número entero")
let number2 = +prompt("Ingrese otro número entero")
let suma = number1 + number2
let resta = number1 - number2
let multiplicacion = number1 * number2
let division = number1 / number2
let modulo = number1 % number2

document.write(`La suma de ${number1} y ${number2} es ${suma}`+ `</br>`);
document.write(`La resta de ${number1} y ${number2} es ${resta}` + '</br>');
document.write('La multiplicación entre '+ number1 + ' y ' + number2 + ' es ', multiplicacion + '</br>');
document.write(number1 + ' dividido en ' + number2 + ' es ', division + '</br>');
document.write('El módulo de '+ number1 + ' dividido en ' + number2 + ' es ', modulo + '</br>');

let celsius= +prompt("Ingrese la temperatura actual en °")
let kelvin = celsius + 273.15
let Farenheit = (celsius * 9/5) + 32

document.write('</br>' + celsius +'°C' + ' equivale a ' + kelvin + 'K' + '</br>');
document.write(celsius +'°C' + ' equivale a ' + Farenheit + '°F' + '</br>');

