$(function() {


    // toggle menu
   $('.menuDrop').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});


    // fullpage customization
    $('#fullpage').fullpage({
    /*  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'], */
      sectionSelector: '.vertical-scrolling',
      navigation: true,
      slidesNavigation: true,
      controlArrows: false,
      anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
      menu: '#menu',

      afterLoad: function(anchorLink, index) {
        if (index == 5) {
            $('#fp-nav').hide();
          }
      },

      onLeave: function(index, nextIndex, direction) {
        if(index == 5) {
          $('#fp-nav').show();
        }
      }
    });
}());