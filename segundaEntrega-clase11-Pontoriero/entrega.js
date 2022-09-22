let edad= parseInt(prompt("Ingrese su edad"));
while (edad < 18) {
    console.log("No puede ingresar, vuelva cuando sea mayor de edad!");
    edad= parseInt(prompt("Ingrese su edad"));
}

let username = prompt("Ingrese su nombre de usuario");

console.log("Bienvenido", username);
let drink = prompt("Ingresar la bebida deseada: (cerveza, vino o fernet)");
let presupuesto = parseFloat(prompt("Ingrese el monto máximo que dispone para su bebida. Nosotros le mostraremos los productos a su alcance:"));
let cantidad = prompt("Ingrese la cantidad deseada")
let IVA = 1.21;
let ticketFinal = realizarCalculo (drink, cantidad, IVA);
   console.log("Su ticket final es de $", ticketFinal * IVA, " (IVA incluido)");

const destinos = [
       {id: 1, nombre: "cerveza", precio: 400},
       {id: 2, nombre: "vino", precio: 600},
       {id: 3, nombre: "fernet", precio: 1000},    
    ]; 
function realizarCalculo(drink, cantidad, IVA) {
        let cerveza = 400
        let vino = 600
        let fernet = 1000
    switch (drink) {
        case "cerveza":
            alert("La cerveza cuesta $400 + IVA c/u")
            return parseInt(cerveza) * parseInt(cantidad)
        case "vino":
            alert("El vino cuesta $600 + IVA c/u")
            return parseInt(vino) * parseInt(cantidad)
        case "fernet":
            alert("El fernet cuesta $1000 + IVA c/u")
            return parseInt(fernet) * parseInt(cantidad) * parseInt(IVA)
        default:
            alert("No tenemos eso, escabiá mejor 🙄")
            break;
    }
}
const enPresupuesto = destinos.filter(element =>{
    return element.precio <= presupuesto
})
     
   console.log(enPresupuesto);