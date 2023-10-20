function obtenerExtension(imagen) {
    const dotIndex = imagen.lastIndexOf('.');
    if (dotIndex === -1) {
      return "";
    } else {
      return imagen.slice(dotIndex + 1);
    }
  }
  
console.log(obtenerExtension("imagen.jpg"));
