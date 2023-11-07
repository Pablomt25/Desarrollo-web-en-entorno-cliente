window.onload = () => {
    console.log("Página cargada");

    document.addEventListener("DOMContentLoaded", function () {
        var lista = document.getElementById("lista");
        var nuevaEntradaInput = document.getElementById("nuevaEntrada");
        var boton = document.getElementById("boton");

        boton.addEventListener("click", function () {
            var nuevaEntradaTexto = nuevaEntradaInput.value;
            if (nuevaEntradaTexto.trim() !== "") {
                var nuevoElementoLista = document.createElement("li");
                nuevoElementoLista.textContent = nuevaEntradaTexto;
                lista.appendChild(nuevoElementoLista);
                nuevaEntradaInput.value = "";
            }
        });

        nuevaEntradaInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                boton.click();
            }
        });
    });
}