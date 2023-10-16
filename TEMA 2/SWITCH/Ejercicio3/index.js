var numero1 = parseInt(prompt("introduce el primer numero"));
var numero2 = parseInt(prompt("introduce el segundo numero"));

var operacion = prompt("Introduce una operación");

switch (operacion) {
    case "+":
      document.write(numero1+numero2);
      break;

      case "-":
      document.write(numero1-numero2);
      break;

      case "*":
      document.write(numero1*numero2);
      break;

      case "/":
      document.write(numero1/numero2);
      break;
}