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
$("#comments").animate({height: "0px"});

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
    $("#comments").animate({height: "100%"});
});
$("#hide-comm").click(function(){
    $('#comments').hide();
    $("#comments").animate({height: "0px"});
});