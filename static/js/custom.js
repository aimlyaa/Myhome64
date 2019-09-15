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

window.onscroll = function() {myFunction()};

var header = document.getElementById("headerMenu");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky && window.innerWidth> 768) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('#mainBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#main").offset().top-$('#main').innerHeight()/48
    }, 'slow');
});
$('#photosBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#photos").offset().top-$('#photos').innerHeight()/4
    }, 'slow');
});
$('#guaranteeBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#guarantee").offset().top-$('#guarantee').innerHeight()*0.1
    }, 'slow');
});
$('#schemeBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#scheme").offset().top-$('#scheme').innerHeight()*0.1
    }, 'slow');
});
$('#commentsBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#comments").offset().top-$('#comments').innerHeight()*0.1
    }, 'slow');
});
$('#makemoneyBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#makemoney").offset().top-$('#makemoney').innerHeight()*0.1
    }, 'slow');
});