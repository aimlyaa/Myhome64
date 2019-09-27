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