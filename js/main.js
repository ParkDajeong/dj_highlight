function focusMenu(self) {
  $(".gnb__menu-link").css("opacity", 0.3);
  $(self).css("opacity", 1);
}

function focusOutMenu() {
  $(".gnb__menu-link").css("opacity", 1);
}

$(function() {
  // home slider
  $(".home-slide").slick({
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  // gnb hover,focus event
  $(".gnb__menu-link").hover(function() {
    focusMenu($(this));
  }, function() {
    focusOutMenu();
  });
  
  $(".gnb__menu-link").focus(function() {
    focusMenu($(this));
  });

  $(".gnb__menu-link").blur(function() {
    focusOutMenu();
  });
  
});