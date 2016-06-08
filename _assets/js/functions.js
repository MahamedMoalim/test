$( document ).ready(function() {

  nav();

  smoothScroll();

  if ($(window).width() > 1024) {

    parallax();

  }

  carousel();

});

function nav() {

  $('#nav-toggle').click(function(){

    $('#nav-lockup, #nav-lockup .nav li, #nav-lockup .return, html, body').addClass('nav-open');

    setTimeout(function(){

      $('#nav-lockup').animate({
        top: '-175px',
        left: '-175px',
        right: '-175px',
        bottom: '-175px'
      }, 200);

    }, 500);

  });

  $('#nav-lockup .return').click(function(){

    $('#nav-lockup, #nav-lockup .nav li, #nav-lockup .return').removeClass('nav-open');

    setTimeout(function(){

      $('html, body').removeClass('nav-open');

      $('#nav-lockup').css({
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      });

    }, 500);

  });

}

function smoothScroll() {

  $('#hero .claim a').click(function(event){

    var target = $($(this).attr('href'));

    if (target.length) {

      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);

    }

  });

}

function parallax() {

  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if (wScroll < $('#hero').height()) {

      var opacity = 1 - (wScroll / 250),
          vertical = - (wScroll / 10);

      $('#hero .claim').css({
        'opacity' : ''+ opacity +'',
        'transform' : 'translateY('+ vertical +'px)'
      });

    }

    if (wScroll > $('#about').offset().top - $(this).height() && wScroll < $('#about').offset().top + $('#about').height() + 300) {

      $('#about .foreground').css({
        'transform' : 'translateY(-'+ wScroll / 2 +'px)'
      });
      $('#about .midground').css({
        'transform' : 'translateY(-'+ wScroll / 9 +'px)'
      });
      $('#about .background-right').css({
        'transform' : 'translateY(-'+ wScroll / 13 +'px)'
      });
      $('#about .background-left').css({
        'transform' : 'translateY(-'+ wScroll / 15 +'px)'
      });

    }

    if (wScroll > $('#contact').offset().top - $(this).height() + $('#contact').height()) {

      $('#contact .wrapper').addClass('visible');

    }

    else {

      $('#contact .wrapper').removeClass('visible');

    }

  });

}

function carousel() {

  $('#featured .num-nav p, #featured .thumb-nav .thumb').click(function(){

    if (!($(this).hasClass('active'))) {

      loader();
      navState(this);

    }

  });

}

function loader() {

  $('#featured #loader span').animate({width: '100%'}, 1500);
  $('#featured #loader span').animate({opacity: 0}, 500, reset);

}

function navState(param) {

  var active = $('.num-nav').find('.active'),
      current = $('.num-nav').children().index(active);
      index = $(param).parent().children().index($(param));

  setTimeout(function() {

    $('.num-nav').children().eq(current).removeClass('active');
    $('.thumb-nav').children().eq(current).removeClass('active');
    $('.num-nav').children().eq(index).addClass('active');
    $('.thumb-nav').children().eq(index).addClass('active');

  }, 1500);

  swap(current, index);

}

function swap(current, index) {

  $('#featured .banner-lockup').removeClass('active');

  setTimeout(function() {

    $('#featured .posts').children().eq(current).removeClass('active');
    $('#featured .banner-lockup').removeClass('banner-'+ current +'');
    $('#featured .posts').children().eq(index).addClass('active');
    $('#featured .banner-lockup').addClass('active banner-'+ index +'');

  }, 1500);

}

function reset() {

  $('#featured #loader span').css({'width' : '0%', 'opacity' : '1'});

}
