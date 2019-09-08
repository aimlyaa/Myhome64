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
        scrollTop: $("#photos").offset().top-$('#photos').innerHeight()/6
    }, 'slow');
});
$('#guaranteeBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#guarantee").offset().top-$('#guarantee').innerHeight()/6
    }, 'slow');
});
$('#schemeBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#scheme").offset().top-$('#scheme').innerHeight()/6
    }, 'slow');
});
$('#commentsBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#comments").offset().top-$('#comments').innerHeight()/6
    }, 'slow');
});
$('#makemoneyBtn').click(function(){
    $('html,body').animate({
        scrollTop: $("#makemoney").offset().top-$('#makemoney').innerHeight()/6
    }, 'slow');
});