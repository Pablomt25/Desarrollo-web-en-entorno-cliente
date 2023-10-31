window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
}

function asociarEventos() {
    var estaPintando = false;
    var offsetX, offsetY;
    var moverImagen = document.getElementById("imagen");
    var moverImagen2 = document.getElementById("imagen2")

    moverImagen.addEventListener("mousedown", function(e) {
        estaPintando = true;
        offsetX = e.clientX - moverImagen.getBoundingClientRect().left;
        offsetY = e.clientY - moverImagen.getBoundingClientRect().top;
        moverImagen.style.zIndex = "2";

        document.onmousemove = function(e) {
            if (estaPintando) {
                moverImagen.style.left = (e.clientX - offsetX) + "px";
                moverImagen.style.top = (e.clientY - offsetY) + "px";
            }
        };

        document.onmouseup = function() {
            estaPintando = false;
            moverImagen.style.zIndex = "1";
            document.onmousemove = null;
            document.onmouseup = null;
        };
    });


        moverImagen2.addEventListener("mousedown", function(e) {
        estaPintando = true;
        offsetX = e.clientX - moverImagen2.getBoundingClientRect().left;
        offsetY = e.clientY - moverImagen2.getBoundingClientRect().top;
        moverImagen2.style.zIndex = "2";

        document.onmousemove = function(e) {
            if (estaPintando) {
                moverImagen2.style.left = (e.clientX - offsetX) + "px";
                moverImagen2.style.top = (e.clientY - offsetY) + "px";
            }
        };

        document.onmouseup = function() {
            estaPintando = false;
            moverImagen2.style.zIndex = "1";
            document.onmousemove = null;
            document.onmouseup = null;
        };
    });

}
