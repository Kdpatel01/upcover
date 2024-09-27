$(document).ready(function () {
  $(".btn").click(function () {
    $(".moblie_main_menu").slideToggle();
    $(this).find('i').toggleClass('fa-bars fa-times');
  });

  // slider js start

  $("#slider").owlCarousel(
    {
      items: 1,
      loop: true,
      dots: true,
      dotsData: true,
      nav: true,
      navElement: 'span',
      navText: ['<i class="fa-solid fa-caret-left fa-beat-fade"></i>', '<i class="fa-solid fa-caret-right fa-beat-fade"></i>'],
      // autoplay: true,
      // autoplayTimeout: 8000,
      smartSpeed: 2000,
    }
  );

  $("#testimonials").owlCarousel(
    {
      // items: 3,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 3000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    }
  );

  // slider js end

  // scroll icon js start

  $(window).scroll(function () {
    var h = $(window).scrollTop();

    if (h > 100) {
      $('.sticky_icon , .darkmode').fadeIn(2000);
    } else {
      $('.sticky_icon , .darkmode').hide();
    }
  })

  $('.sticky_icon , .darkmode').hide();

  $('.sticky_icon').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 2000)
  })

  $('.darkmode').click(function () {
    $('html').toggleClass('dark');
    $(this).find('i').toggleClass('fa-sun fa-moon');
    $(this).toggleClass('bg-slate-800 bg-teal-400');
  })

  // scroll icon js end

  // page loader start

  setTimeout(() => {
    $('.loading').fadeOut(300);
  }, 1600)

  // page loader end

});