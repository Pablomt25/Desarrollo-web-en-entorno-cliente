function validarFormulario() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const phoneRegex = /^\d{9}$/; // Expresión regular para 9 dígitos
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // Al menos 6 caracteres con una letra mayúscula y un número
    
    let valid = true;

    // Validación de campos vacíos
    if (firstName.value.trim() === '') {
        firstName.classList.add('error');
        valid = false;
    } else {
        firstName.classList.remove('error');
    }

    if (lastName.value.trim() === '') {
        lastName.classList.add('error');
        valid = false;
    } else {
        lastName.classList.remove('error');
    }

    if (!phone.value.match(phoneRegex)) {
        phone.classList.add('error');
        valid = false;
    } else {
        phone.classList.remove('error');
    }

    if (email.value.trim() === '') {
        email.classList.add('error');
        valid = false;
    } else {
        email.classList.remove('error');
    }

    if (!password.value.match(passwordRegex)) {
        password.classList.add('error');
        valid = false;
    } else {
        password.classList.remove('error');
    }

    if (confirmPassword.value.trim() === '') {
        confirmPassword.classList.add('error');
        valid = false;
    } else {
        confirmPassword.classList.remove('error');
    }

    // Validación del campo "Confirm Password"
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        valid = false;
    } else {
        confirmPassword.classList.remove('error');
    }

    if (!valid) {
        alert('Por favor, complete los campos correctamente.');
    }

    return valid;
}
