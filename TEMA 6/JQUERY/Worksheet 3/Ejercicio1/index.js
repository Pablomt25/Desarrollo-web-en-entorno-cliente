$(document).ready(function(){
    var filas = $('table tr');

    filas.each(function(index){
        if (index < 2) {
            $(this).css('background-color', 'red');
        } else if (index > 2) {
            $(this).css('background-color', 'blue');
        }
    });
});