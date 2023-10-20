function secuenciaDeColores(color, longitud) {
    const secuenciaColor = [];
  
    for (let i = 0; i < longitud; i++) {
      const aleatorio = Math.floor(Math.random() * color.length);
  
      secuenciaColor.push(color[aleatorio]);
    }
  
    return secuenciaColor;
  }
  
  const secuencia = secuenciaDeColores(["rojo", "azul", "verde"], 4);
  console.log(secuencia);
  