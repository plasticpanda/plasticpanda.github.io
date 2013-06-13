/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, jquery:true*/

(function($) {
  'use strict';

  $(function () {

    // some vars
    var setHeights;


    // set heights for some pagecontainer/sidebar elements
    setHeights = function () {
      $('.pure-menu > ul').css({
        'height': ($('#sidebar').height() - $('.sidebar-container').outerHeight() - 15) + 'px'
      });
    };
    setHeights();

    // debouncing on resize for preventing over nine thousand times calls
    $.event.special.debouncedresize.threshold = 1000;
    $(window).on('debouncedresize', function () {
      setHeights();
      //$('.page-container').mCustomScrollbar('update');
      $('.pure-menu > ul').mCustomScrollbar('update');
    });

    // plugin for (main content) pages scrolling
    $('.page-container').mCustomScrollbar({
        scrollInertia: 550,
        horizontalScroll: true,
        mouseWheelPixels: 'auto',
        autoHideScrollbar: false,
        scrollButtons: {
          enable: false
        },
        theme: 'dark-thin',
        advanced: {
          updateOnBrowserResize: true
        }
      }
    );

    $('.pure-menu > ul').mCustomScrollbar({
        scrollInertia: 550,
        mouseWheelPixels: 'auto',
        autoHideScrollbar: false,
        scrollButtons: {
          enable: false
        },
        theme: 'light-thin',
        advanced: {
          updateOnBrowserResize: true
        }
      }
    );

  });

})(jQuery);