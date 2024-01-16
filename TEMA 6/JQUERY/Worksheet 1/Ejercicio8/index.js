$(document).ready(function(){
    $('#noticia1').css('font-size', '16px');
    $('#noticia2').css('font-size', '20px');
    $('#noticia3').css('font-size', '30px');


    $('.noticia').mouseover(function(){
        $(this).css('background-color', 'lightgray');
    });

    $('.noticia').mouseout(function(){
        $(this).css('background-color', '');
    });
});