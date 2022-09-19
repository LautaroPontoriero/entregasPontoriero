document.title = "comprapasajes.com ✈"
const tituloPrincipal = document.getElementsByTagName("span")[0],
h2 =  document.getElementById("h2"),
ingreso =  document.getElementById("ingreso"),
parrafo =  document.getElementsByTagName("p"),
parrafoClases =  document.getElementsByClassName("contenedor"),
contenedor =  document.getElementById("contenedor"),
input =  document.getElementById("ingreso");

const servicios = [
];
tituloPrincipal.innerText = "Comprapasajes.com ✈";
h2.innerText = "Viaja con locura 🤯";
ingreso.innerText = "Ingresa a tu usuario!";
ingreso.onclick=()=>{
    console.log('Ingresó a su usuario');
}