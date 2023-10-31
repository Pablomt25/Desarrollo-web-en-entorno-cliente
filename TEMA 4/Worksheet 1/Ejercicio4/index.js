window.onload = function() {
    const tabla = document.getElementById('tabla');

    for (let i = 0; i < 20; i++) {
      const fila = document.createElement('tr');
      for (let j = 0; j < 20; j++) {
        const celda = document.createElement('td');
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }

    let pintar = false;

    tabla.addEventListener('mousemove', function(evento) {
      if (pintar) {
        if (evento.ctrlKey) {
          evento.target.style.backgroundColor = 'red';
        } else if (evento.shiftKey) {
          evento.target.style.backgroundColor = 'blue';
        }
      }
    });

    tabla.addEventListener('mousedown', function() {
      pintar = true;
    });

    tabla.addEventListener('mouseup', function() {
      pintar = false;
    });

    tabla.addEventListener('contextmenu', function(evento) {
      evento.preventDefault();
    });
  };