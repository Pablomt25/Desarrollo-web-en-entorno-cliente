function hablarHacker(texto) {
    const hackerTexto = texto
      .replace(/a/g, '4')
      .replace(/e/g, '3')
      .replace(/i/g, '1')
      .replace(/o/g, '0')
      .replace(/s/g, '5');
  
    return hackerTexto;
  }
  
  const textoOriginal = "hola me llamo pablo";
  const hackerTexto = hablarHacker(textoOriginal);
  console.log(hackerTexto);
  