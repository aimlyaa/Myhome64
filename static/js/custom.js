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
    $('#comments').show();
});
$("#hide-comm").click(function(){
    $('#comments').hide();
});
$("#show-serts").click(function(){
    $('#serts').show();
});
$("#hide-serts").click(function(){
    $('#serts').hide();
});