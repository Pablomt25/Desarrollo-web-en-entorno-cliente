window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
}

function asociarEventos(){

    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const dniInput = document.getElementById('dni');
    const telefonoInput = document.getElementById('telefono');
    const emailInput = document.getElementById('email');
    const usuarioInput = document.getElementById('usuario');


    nombreInput.addEventListener('focus', () => validateNombre());
    apellidosInput.addEventListener('focus', () => validateApellidos());
    dniInput.addEventListener('focus', () => validateDNI());
    telefonoInput.addEventListener('blur', () => validateTelefono());
    emailInput.addEventListener('focus', () => validateEmail());
    usuarioInput.addEventListener('focus', () => validateUsuario());
    
    function validateNombre() {
      const nombreValue = nombreInput.value;
      const nombreMensaje = document.getElementById('nombreMensaje');
      if (/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreValue)) {
        nombreMensaje.textContent = '   Nombre válido';
        return true;
      } else {
        nombreMensaje.textContent = '  Nombre inválido';
        return false;
      }
    }
  
    function validateApellidos() {
      const apellidosValue = apellidosInput.value;
      const apellidosMensaje = document.getElementById('apellidosMensaje');
      if (/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(apellidosValue)) {
        apellidosMensaje.textContent = '  Apellidos válidos';
        return true;
      } else {
        apellidosMensaje.textContent = '  Apellidos inválidos';
        return false;
      }
    }
  
    function validateDNI() {
      const dniValue = dniInput.value;
      const dniMensaje = document.getElementById('dniMensaje');
      if (/^\d{8}[A-Za-z]$/.test(dniValue)) {
        dniMensaje.textContent = '  DNI válido';
        return true;
      } else {
        dniMensaje.textContent = '  DNI inválido';
        return false;
      }
    }
  
    function validateTelefono() {
      const telefonoValue = telefonoInput.value;
      const telefonoMensaje = document.getElementById('telefonoMensaje');
      if (/^\d{9}$/.test(telefonoValue)) {
        telefonoMensaje.textContent = '  Teléfono válido';
        return true;
      } else {
        telefonoMensaje.textContent = '  Teléfono inválido';
        return false;
      }
    }
  
    function validateEmail() {
      const emailValue = emailInput.value;
      const emailMensaje = document.getElementById('emailMensaje');
      if (/^\S+@\S+\.\S+$/.test(emailValue)) {
        emailMensaje.textContent = '  Email válido';
        return true;
      } else {
        emailMensaje.textContent = '  Email inválido';
        return false;
      }
    }
  
    function validateUsuario() {
      const usuarioValue = usuarioInput.value;
      const usuarioMensaje = document.getElementById('usuarioMensaje');
      if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/.test(usuarioValue)) {
        usuarioMensaje.textContent = '  Usuario válido';
        return true;
      } else {
        usuarioMensaje.textContent = '  Usuario inválido';
        return false;
      }
    }

}