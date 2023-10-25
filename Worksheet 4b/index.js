window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
    mostrarElementos(6);
}

function asignarColoresAleatorios(ids) {
    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    ids.forEach((id) => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        id.style.backgroundColor = rndCol;
    });
}

function asociarEventos() {
    const easyLink = document.querySelector("a[href='#easy']");
    const hardLink = document.querySelector("a[href='#hard']");
    const ids = document.querySelectorAll(".id");
    const newColorsLink = document.getElementById("newColorsLink");

    newColorsLink.addEventListener("click", () => {
        asignarColoresAleatorios(ids);
    });

    easyLink.addEventListener("click", () => {
        mostrarElementos(3);
    });

    hardLink.addEventListener("click", () => {
        mostrarElementos(6);
    });
}

function mostrarElementos(cantidad) {
    const ids = document.querySelectorAll(".id");


    ids.forEach((id, index) => {
        id.style.display = index < cantidad ? "block" : "none";
    });
}
