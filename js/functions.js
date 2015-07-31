$(window).scroll(function(){
  // how far we have scrolled from top
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform': 'translate(0px,'+wScroll/2 +'%)'
  });
  $('.back-bird').css({
    'transform': 'translate('+wScroll/10 +'%,-'+wScroll/10+'%)'
  });
  $('.fore-bird').css({
    'transform': 'translate(0px,-'+wScroll/40 +'%)'
  });
});
