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
        },
        callbacks: {

        }
      }
    );

    setTimeout(function () {
      var pandagif = '<img style="display:none; position: absolute; width: 50px; top: -38px; left: 50%; margin-left: -25px;" src="http://30.media.tumblr.com/tumblr_livy7oxLC41qc9z7yo1_500.gif" id="pandagif">';

      $('.page-container .mCSB_scrollTools').css('overflow', 'visible').find('.mCSB_draggerContainer .mCSB_dragger .mCSB_dragger_bar').append($(pandagif));

      $('.page-container img#pandagif').fadeIn(500);

    }, 100);

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