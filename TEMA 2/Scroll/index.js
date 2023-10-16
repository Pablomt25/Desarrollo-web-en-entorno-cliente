window.addEventListener('scroll', scrollInfinito);

function scrollInfinito(){
    
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clienteHeight = document.documentElement.clientHeight;
    if( (scrollTop + clienteHeight) > (scrollHeight - 10))
    document.getElementById("etiqueta").innerHTML+="SCROLL <br><br><br><br><br><br><br><br><br>SCROLL<br><br><br><br><br><br><br><br><br><br>"
}