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

      var pandaPics = [
        'http://25.media.tumblr.com/tumblr_lnnchgjeYL1qlue6co1_100.gif',
        'http://24.media.tumblr.com/d066094273e6b365cff0fd8a4b86ad3f/tumblr_mj0tagqZbK1qcsy8ho1_100.gif',
        'http://24.media.tumblr.com/tumblr_m7je89YssL1rbfmzvo1_500.gif',
        'http://25.media.tumblr.com/tumblr_lqyw2aptnY1qii6tmo1_100.gif',
        'http://24.media.tumblr.com/tumblr_m8k7y0g5ah1rsn7yxo1_100.gif',
        'http://24.media.tumblr.com/tumblr_ln8olsCRSW1qlue6co1_100.gif'
      ]
        , randomPic
        , pandagif
        , _r;

      _r = Math.floor((Math.random() * (pandaPics.length - 1)));

      randomPic = pandaPics[_r];
      pandagif = '<img style="display:none; position: absolute; width: 50px; top: -38px; left: 50%; margin-left: -25px;" src="' + randomPic + '" id="pandagif">';

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