/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, jquery:true*/

(function($) {
  'use strict';

  $(function () {


    var snapTo = [];

    console.log($('.page-container').outerWidth() / $('.page-container > .page').length);

    $('.page-container > .page').each(function(){
      var $this = $(this)
        , thisX = $this.position().left;
      
      snapTo.push(thisX);
    });

    function findClosest(num,arr){
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
    }

    function snapScrollbar(){
      var posX = $('.page-container .mCSB_container').position().left
        , closestX = findClosest(Math.abs(posX), snapTo);
      
      $('.page-container').mCustomScrollbar('scrollTo', closestX, { scrollInertia: 350, callbacks: false });
    }



    $('.page-container').mCustomScrollbar({
        scrollInertia: 550,
        horizontalScroll: true,
        mouseWheelPixels: 'auto', //$('.page-container').outerWidth() / $('.page-container > .page').length,
        autoHideScrollbar: true,
        scrollButtons: {
          enable:false
        },
        theme: 'dark',
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





  });

})(jQuery);