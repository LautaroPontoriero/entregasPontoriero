document.title = "comprapasajes.com ✈"
const tituloPrincipal = document.getElementsByTagName("span")[0],
h2 =  document.getElementById("h2"),
h3 =  document.getElementById("h3"),
ingreso =  document.getElementById("ingreso"),
parrafo =  document.getElementsByTagName("p"),
parrafoClases =  document.getElementsByClassName("contenedor"),
contenedor =  document.getElementById("contenedor"),
input =  document.getElementById("usuario"),
age =  document.getElementById("auth");

const btn = document.getElementById("btnIngresar"),
  checkbox = document.getElementById("checkbox"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  h1 = document.querySelector(".date");
btn.value = "Registrar";

const destino = [
    { id: 1, nombre: "bariloche", precio: 45000 },
    { id: 2, nombre: "cordoba", precio: 30000 },
    { id: 3, nombre: "rosario", precio: 25000 },
    { id: 4, nombre: "tucuman", precio: 35000 },
]

//-----------

function guardar(valor) {
  let user = { username: email.value, password: password.value };

  if (valor === "sessionStorage") {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  if (valor === "localStorage") {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return user;
}

function recuperarDatos(datos) {
  if (datos) {
    email.value = datos.username;
    password.value = datos.password;
  }
}

recuperarDatos(JSON.parse(localStorage.getItem("user")));
function saludo() {

}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkbox.checked ? guardar("localStorage") : guardar("sessionStorage");
  Toastify({
    text: "Bienvenido!",
    duration: 2000,
    
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "1rem",
    },
    onClick: function () {}, 
  }).showToast();
});


//----------
const muestraInput = document.querySelectorAll('input[type="text"]');
console.log(muestraInput);

const servicios = [
];
tituloPrincipal.innerText = "Comprapasajes.com ✈";
ingreso.innerText = "Buscá tu destino!";

ingreso.onclick=()=>{
    h2.innerText = "Bienvenido 🎉";
}

function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombre.includes(filtro);
    });
    return filtrado;
  }
btnSearch.addEventListener("click", () => {
    let resultado = filtrarServicio(destino, input.value.toLowerCase());
    console.log(resultado);
});

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  
  let formulario= e.target
  console.log(formulario.children[0].value);
  console.log(formulario.children[1].value);
})

const DateTime = luxon.DateTime;
let dt = DateTime.now();
let dateObj = {
  month: "long",
  day: "numeric",
  year: "numeric",
  weekday: "long",
};
dt.setLocale("es").toLocaleString(dateObj);
h1.innerText = ` ${dt.setLocale("es").toLocaleString(dateObj)}`;

