var num_adivinar = Math.floor(Math.random() * 100) + 1;
        
var intentos = 0;
var acertado = false;

while (!acertado) {
    var num = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    intentos++;

    if (num === num_adivinar) {
        acertado = true;
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");

    } else if (num < num_adivinar) {
        alert("El número es mayor.");

    } else {
        alert("El número es menor.");
            }
}