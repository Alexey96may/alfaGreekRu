
  $('#readmode_btn').click(function(){
    if ($('.back_navbar').hasClass('display_none')) {
      $('.back_navbar').removeClass("display_none");
      $('.all_body').removeClass("display_block padding_0");
      $('#darkmode_btn').addClass("display_none");
      $('#smaller_text').addClass("display_none");
      $('#bigger_text').addClass("display_none");
      $('#main').removeClass("color_to_black color_to_white");
      $('#twin_main').removeClass("text_biggest text_bigger text_big text_medium text_small text_smaller text_smallest color_to_black color_to_white");
      $('#read_scroll').removeClass("darkmode_read_scroll");
      $('#darkmode_btn').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/moon_icon.png');
      $('#darkmode_btn').children('img').removeClass("button_img_rotate_left");
      $('#darkmode_btn').children('img').removeClass("button_img_rotate");
      $('#readmode_btn').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/book_icon_black.png');
      $('#smaller_text').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/a_smaller.png');
      $('#bigger_text').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/a_bigger.png');
      $('.comment_body').css({"margin-left":"12px", "margin-right":"12px"});
      $('#read_scroll').css({"right": "24px"});
    } else {
      $('.back_navbar').addClass("display_none");
      $('.all_body').addClass("display_block padding_0");
      $('#darkmode_btn').removeClass("display_none");
      $('#smaller_text').removeClass("display_none");
      $('#bigger_text').removeClass("display_none");
      $('.comment_body').css({"margin-left":"0", "margin-right":"0"});
      $('#read_scroll').css({"right": "12px"});
    }
  });

  //BurgerActivation
  $('#img_sight').click(function(){ 
    $('.back_navbar').removeClass("display_none");
  });

  //Font Changing
  $('#smaller_text').click(function(){ 
    if ($('#twin_main').hasClass('text_biggest') || $('#twin_main').hasClass('text_biggest_r') ) {
      $('#twin_main').removeClass("text_biggest");
      $('#twin_main').removeClass("text_biggest_r");
      $('#twin_main').addClass("text_bigger_r");
    } else if ($('#twin_main').hasClass('text_bigger') || $('#twin_main').hasClass('text_bigger_r')){
      $('#twin_main').removeClass("text_bigger");
      $('#twin_main').removeClass("text_bigger_r");
      $('#twin_main').addClass("text_big_r");
    } else if ($('#twin_main').hasClass('text_big') || $('#twin_main').hasClass('text_big_r')){
      $('#twin_main').removeClass("text_big");
      $('#twin_main').removeClass("text_big_r");
      $('#twin_main').addClass("text_medium_r");
    } else if ($('#twin_main').hasClass('text_medium') || $('#twin_main').hasClass('text_medium_r')){
      $('#main').removeClass("text_medium");
      $('#twin_main').removeClass("text_medium_r");
      $('#twin_main').addClass("text_small_r");
    } else if ($('#twin_main').hasClass('text_small') || $('#twin_main').hasClass('text_small_r')){
      $('#twin_main').removeClass("text_small");
      $('#twin_main').removeClass("text_small_r");
      $('#twin_main').addClass("text_smaller_r");
    } else if ($('#twin_main').hasClass('text_smaller') || $('#twin_main').hasClass('text_smaller_r')){
      $('#twin_main').removeClass("text_smaller");
      $('#twin_main').removeClass("text_smaller_r");
      $('#twin_main').addClass("text_smallest_r");
    } else if ($('#twin_main').hasClass('text_smallest') || $('#twin_main').hasClass('text_smallest_r')){
      $('#twin_main').removeClass("text_smallest");
      $('#twin_main').removeClass("text_smallest_r");
      $('#twin_main').addClass("text_biggest_r");
    } else {
      $('#twin_main').addClass("text_small_r");
    }
  });

  $('#bigger_text').click(function(){
    if ($('#twin_main').hasClass('text_biggest') || $('#twin_main').hasClass('text_biggest_r')) {
      $('#twin_main').removeClass("text_biggest_r");
      $('#twin_main').removeClass("text_biggest");
      $('#twin_main').addClass("text_smallest");
    } else if ($('#twin_main').hasClass('text_bigger') || $('#twin_main').hasClass('text_bigger_r')){
      $('#twin_main').removeClass("text_bigger_r");
      $('#twin_main').removeClass("text_bigger");
      $('#twin_main').addClass("text_biggest");
    } else if ($('#twin_main').hasClass('text_big') || $('#twin_main').hasClass('text_big_r')){
      $('#twin_main').removeClass("text_big_r");
      $('#twin_main').removeClass("text_big");
      $('#twin_main').addClass("text_bigger");
    } else if ($('#twin_main').hasClass('text_medium') || $('#twin_main').hasClass('text_medium_r')){
      $('#twin_main').removeClass("text_medium_r");
      $('#twin_main').removeClass("text_medium");
      $('#twin_main').addClass("text_big");
    } else if ($('#twin_main').hasClass('text_small') || $('#twin_main').hasClass('text_small_r')){
      $('#twin_main').removeClass("text_small_r");
      $('#twin_main').removeClass("text_small");
      $('#twin_main').addClass("text_medium");
    } else if ($('#twin_main').hasClass('text_smaller') || $('#twin_main').hasClass('text_smaller_r')){
      $('#twin_main').removeClass("text_smaller_r");
      $('#twin_main').removeClass("text_smaller");
      $('#twin_main').addClass("text_small");
    } else if ($('#twin_main').hasClass('text_smallest') || $('#twin_main').hasClass('text_smallest_r')){
      $('#twin_main').removeClass("text_smallest_r");
      $('#twin_main').removeClass("text_smallest");
      $('#twin_main').addClass("text_smaller");
    } else {
      $('#twin_main').addClass("text_big");
    }
  });

  //DarkMode
  $('#darkmode_btn').click(function(){
    if ($('#main').hasClass('color_to_black')) {
      $('#main').removeClass("color_to_black");
      $('#main').addClass("color_to_white");
      $('#read_scroll').removeClass("darkmode_read_scroll");
      $(this).children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/moon_icon.png');
      $(this).children('img').removeClass("button_img_rotate_left");
      $(this).children('img').addClass("button_img_rotate");
      $('#readmode_btn').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/book_icon_black.png');
      $('#smaller_text').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/a_smaller.png');
      $('#bigger_text').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/a_bigger.png');
      $('.link-sites').removeClass("link_in_darkness");
      $('.author_link ').children('a').removeClass("link_in_darkness");
    } else {
      $('#main').removeClass("color_to_white");
      $('#main').addClass("color_to_black");
      $('#read_scroll').addClass("darkmode_read_scroll");
      $(this).children('img').removeClass("button_img_rotate");
      $(this).children('img').addClass("button_img_rotate_left");
      $(this).children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/sun_icon.png');
      $('#readmode_btn').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/book_icon_white.png');
      $('#smaller_text').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/a_smaller_white.png');
      $('#bigger_text').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/a_bigger_white.png');
      $('.link-sites').addClass("link_in_darkness");
      $('.author_link ').children('a').addClass("link_in_darkness");
    }
  });
  
  $(window).scroll(function(){
    if ( (window.scrollY > $('#scroll_field').offset().top + 200) && (window.scrollY < $('#scroll_field').offset().top + $('#scroll_field').height() - 200) ) {
      $('#read_scroll').addClass('vis');
    }else{
      $('#read_scroll').removeClass('vis');
    }
    });

$('#translate_btn').click(function(){
    if ($(this).hasClass('yesIhave')) {
      $(this).children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/abc_russian.png');
      $('#read_scroll').text('Перевод');
      $(this).removeClass('yesIhave');
      $('#read_scroll').removeClass('yesIhave');
      $('.flex-book-text').slideToggle('slow');
      $('.flex-book-text-translate').slideToggle('slow');
    } else {
      $(this).children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/abc_greek.png');
      $('#read_scroll').text('Оригинал');
      $(this).addClass('yesIhave');
      $('#read_scroll').addClass('yesIhave');
      $('.flex-book-text').slideToggle('slow');
      $('.flex-book-text-translate').slideToggle('fast');
    }
});

$('#read_scroll').click(function(){
  if ($(this).hasClass('yesIhave')) {
    $(this).text('Перевод');
    $('#translate_btn').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/abc_russian.png');
    $(this).removeClass('yesIhave');
    $('#translate_btn').removeClass('yesIhave');
    $('.flex-book-text').slideToggle('slow');
    $('.flex-book-text-translate').slideToggle('slow');
  } else {
    $(this).text('Оригинал');
    $('#translate_btn').children('img').attr('src', '/wp-content/themes/alfa-greek/assets/img/abc_greek.png');
    $(this).addClass('yesIhave');
    $('#translate_btn').addClass('yesIhave');
    $('.flex-book-text').slideToggle('slow');
    $('.flex-book-text-translate').slideToggle('fast');
  }
});
