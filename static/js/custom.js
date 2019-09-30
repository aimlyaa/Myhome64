let commButtonUsed=false;
let sertsButtonUsed=false;

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    loop:true,
    loadPrevNextAmount:3,
    lazy: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
$('#comments').hide();
$('#serts').hide();

$('#prev').click(function(){
    mySwiper[0].slidePrev();
});
$('#next').click(function(){
    mySwiper[0].slideNext();
});
$('#prev2').click(function(){
    mySwiper[2].slidePrev();
});
$('#next2').click(function(){
    mySwiper[2].slideNext();
});
$("#more-comm").click(function(){
    if (!commButtonUsed){
        $('#comments').show();
        commButtonUsed=true;
    }
    else{
        $('#comments').hide();
        commButtonUsed=false;
    }
});
$("#hide-comm").click(function(){
    $('#comments').hide();
    commButtonUsed=false;
});
$("#show-serts").click(function(){
    if (!sertsButtonUsed){
        $('#serts').show();
        sertsButtonUsed=true;
    }
    else{
        $('#serts').hide();
        sertsButtonUsed=false;
    }
});
$("#hide-serts").click(function(){
    $('#serts').hide();
    sertsButtonUsed=false;
});