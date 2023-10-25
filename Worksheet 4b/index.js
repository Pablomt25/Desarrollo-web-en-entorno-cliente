window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
}

function asociarEventos() {
    function coloresAleatorios(ids) {
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }

        const numeroAleatorio = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

        document.querySelector(".titulos h1").textContent = numeroAleatorio;

        const indiceAleatorio = random(ids.length - 1);
        ids[indiceAleatorio].style.backgroundColor = numeroAleatorio;

        ids.forEach((id, index) => {
            if (index !== indiceAleatorio) {
                const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
                id.style.backgroundColor = rndCol;
            }
        });
    }

    const easy = document.getElementById("easy");
    const hard = document.getElementById("hard");
    const ids = document.querySelectorAll(".id");
    const newColorsLink = document.getElementById("newColors");

    newColorsLink.addEventListener("click", () => {
        coloresAleatorios(ids);
    });
    coloresAleatorios(ids);

    easy.addEventListener("click", () => {
        mostrarElementos(3);
    });

    hard.addEventListener("click", () => {
        mostrarElementos(6);
    });

    function mostrarElementos(cantidad) {
        const ids = document.querySelectorAll(".id");

        ids.forEach((id, index) => {
            id.style.display = index < cantidad ? "block" : "none";
        });
    }window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
}

function asociarEventos() {
    function coloresAleatorios(ids) {
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }

        const numeroAleatorio = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

        document.querySelector(".titulos h1").textContent = numeroAleatorio;

        const elementosSeleccionables = document.querySelectorAll(".selectable");
        const indiceAleatorio = random(elementosSeleccionables.length - 1);
        const elementoEspecial = elementosSeleccionables[indiceAleatorio];
        elementoEspecial.style.backgroundColor = numeroAleatorio;
        elementoEspecial.setAttribute("data-color", numeroAleatorio);

        elementosSeleccionables.forEach((id, index) => {
            if (index !== indiceAleatorio) {
                const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
                id.style.backgroundColor = rndCol;
                id.setAttribute("data-color", rndCol);
            }
        });
    }

    const easy = document.getElementById("easy");
    const hard = document.getElementById("hard");
    const ids = document.querySelectorAll(".id");
    const newColorsLink = document.getElementById("newColors");

    newColorsLink.addEventListener("click", () => {
        coloresAleatorios(ids);
    });
    coloresAleatorios(ids);

    easy.addEventListener("click", () => {
        mostrarElementos(3);
    });

    hard.addEventListener("click", () => {
        mostrarElementos(6);
    });

    function mostrarElementos(cantidad) {
        const elementosSeleccionables = document.querySelectorAll(".selectable");

        elementosSeleccionables.forEach((id, index) => {
            id.style.display = index < cantidad ? "block" : "none";
        });
    }
}

}
