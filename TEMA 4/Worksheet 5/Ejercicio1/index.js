//Carácter en mayúscula
function validarMayuscula(valor) {
    return /[A-Z]/.test(valor);
    }
//Contiene al menos uno de los caracteres especiales: !@#$%^&
function validarCaracteresEspeciales(valor) {
    return /[!@#$%^&]/.test(valor);
    }

//Correcto de un correo electrónico
function validarCorreo(valor) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(valor);
    }

//Tarjeta de crédito
function validarTarjetaCredito(valor) {
    const tarjetaRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return tarjetaRegex.test(valor);
    }

//Al menos 8 caracteres
function validarLongitud(valor) {
    return valor.length >= 8;
}

  //Contiene al menos un dígito
function validarNumero(valor) {
    return /\d/.test(valor);
}


  console.log(validarMayuscula("abcDef")); 
  console.log(validarCaracteresEspeciales("abc!def")); 
  console.log(validarCorreo("correo@example.com")); 
  console.log(validarTarjetaCredito("1234-5678-9012-3456")); 
  console.log(validarLongitud("12345678"));
  console.log(validarNumero("abc123"));
