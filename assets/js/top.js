/* Прокручивает страницу вверх при нажатии на кнопку */
let scrollPos = 0;
$(window).scroll(function(){
  let st = $(this).scrollTop();
  if (st > scrollPos){
    $('#toTop').fadeOut();
  } else {
    $('#toTop').fadeIn();
  }
  scrollPos = st;
});

$(document).on("click", "#toTop", function(e) {
  e.preventDefault();
  $('body, html').animate({scrollTop: 0}, 800);
  setTimeout(function(){
    $('#toTop').css("display", "none");
  }, 2000,);
});