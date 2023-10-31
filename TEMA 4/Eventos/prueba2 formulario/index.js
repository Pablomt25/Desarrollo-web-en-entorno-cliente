window.onload = ()=>{
    console.log("Pagina cargada")

    asociarEventos();
}

function asociarEventos(){

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "Debes rellenar los dos campos";
  }
});
}
