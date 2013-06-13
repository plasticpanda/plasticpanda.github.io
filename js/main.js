/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, jquery:true*/

(function($) {
  'use strict';

  $(function () {

    // some vars
    var snapTo = []
      , getSnaps
      , setHeights
      , findClosest
      , snapScrollbar;


    // populate snapTo array with right positions
    getSnaps = function () {
      $('.page-container > .page').each(function (i, page) {
        snapTo[i] = $(page).position().left;
      });
    };
    getSnaps();

    // set heights for some pagecontainer/sidebar elements
    setHeights = function () {
      $('.page-container').css({
        'height': ($('#page').height() - (parseInt($('.page-container').css('padding-top').replace('px', ''), 10) * 2)) + 'px'
      });

      $('.pure-menu > ul').css({
        'height': ($('#sidebar').height() - $('.sidebar-container').outerHeight() - 15) + 'px'
      });
    };
    setHeights();

    // debouncing on resize for preventing over nine thousand times calls
    $.event.special.debouncedresize.threshold = 1000;
    $(window).on('debouncedresize', function () {
      getSnaps();
      setHeights();
      $('.page-container').mCustomScrollbar('update');
      $('.pure-menu > ul').mCustomScrollbar('update');
    });

    // find which page is closest when scrolling
    findClosest = function (num, arr) {
      var curr = arr[0]
        , diff = Math.abs(num - curr);

      for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs(num - arr[val]);
        
        if (newdiff < diff) {
          diff = newdiff;
          curr = arr[val];
        }
      }

      return curr;
    };

    // callback for pages custom scrollbar
    snapScrollbar = function () {
      var posX = $('.page-container .mCSB_container').position().left
        , closestX = findClosest(Math.abs(posX), snapTo);
      
      $('.page-container').mCustomScrollbar('scrollTo', closestX, { scrollInertia: 350, callbacks: false });
    };

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
        callbacks: {
          onScroll:function(){ 
            snapScrollbar(); 
          }
        },
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