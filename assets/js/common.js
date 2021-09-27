(function($) {
  $("#menu_btn").click(function() {
    $(this).toggleClass("opened");
  });

  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    slideSelector: '.slide',
    navigation: true,
    navigationPosition: 'left',
    slidesNavigation: false,
    controlArrows: false,
    anchors: ['hero', 'support', 'philosophy', 'news', 'service', 'case', 'flow', 'blog'],
    menu: '#menu',
    afterLoad: function() {
      var slideNumber = $('.fp-section.active').index() + 1;
      if (slideNumber > 9) {
        $('#num').html(slideNumber);
      }
      else {
        //This will change the input of NUM to current section number
        $('#num').html("0" + slideNumber);
      }
    }
  }); 
  $(document).on('click', '#moveRight', function(){
    fullpage_api.moveSlideRight();
  });
  $(document).on('click', '#moveLeft', function(){
    fullpage_api.moveSlideLeft();
  });
  $(document).on('click', '#moveDown', function(){
    fullpage_api.moveSectionDown();
  });

})(jQuery);

  