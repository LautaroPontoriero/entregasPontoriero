debugger

//Calcular cuotas monto determinado
let edad= parseInt(prompt("Ingrese su edad"));
while (edad < 18) {
    console.log("Sos menor de edad, no podes solicitar un prestamo!");
    edad= parseInt(prompt("Ingrese su edad"));
}

    let nombre = prompt("Ingrese su nombre por favor").toUpperCase();
    alert("Hola " + nombre)

function credito(prestamo, interes, cuotas) {
    if(prestamo > 300000){
    alert("El monto a devolver es de $" + prestamo * interes);
    alert("El valor de cada una de las cuotas es de $" + (prestamo * interes) / cuotas);
 
    let resultado = 0;
    console.log(resultado);
    return resultado;
} else {
    alert("Lo siento, el monto ingresado no es supera el mínimo para concretar el préstamo.")
}
}
alert("RECUERDE QUE EL MONTO MINIMO DEBE SER MAYOR A $300.000");
alert("El interés que se sumará en el monto a devolver es del 35%");
let prestamo = parseFloat(prompt("Ingrese el monto que desea recibir como préstamo: "));


interes = 1.35;
let cuotas = prompt("Ingrese la cantidad de cuotas que desea para pagar su préstamo: ");

credito(prestamo, interes, cuotas);


// let edad= parseInt(prompt("Ingrese su edad"));

// while (edad < 18) {
//     console.log("Sos menor de edad, no podes solicitar un prestamo!");
//     edad= parseInt(prompt("Ingrese su edad"));
// }
