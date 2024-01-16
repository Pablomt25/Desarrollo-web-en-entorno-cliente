function vistaSimple(idDiv, arrayLibros){
    
    let ul = document.createElement("ul");
    for (let libro of arrayLibros){
        let li = document.createElement("li");
        li.innerHTML = libro.titulo;
        ul.appendChild(li);
    }
    document.getElementById(idDiv).appendChild(ul);
}
