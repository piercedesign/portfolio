// import $ from 'jquery';
// import whatInput from 'what-input';
//
// window.$ = $;
//
// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';



/******************************************************************
//Jonathan, This needs to be revisited, I will look at this on monday, apparently jQuery 3 dropped jquery functions so I will need to rewrite it anyways for AEM
//currently it should just be loading all the images as soon as it sees one, allowing you to continue forward on your site till I can rebuild.
*********************************************************************/
$(function() {
       $('.lazy').Lazy();
   });


jQuery.fn.isInViewport = function() {
  console.log("in the function");
  var winHeight = jQuery(window).height();
  var winScroll = jQuery(window).scrollTop();
  console.log("page is scrolled from top "+winScroll);
  var elmFromTop = jQuery(this).position().top;


  var fromTop = elmFromTop - winScroll;
  console.log("this element "+jQuery(this).attr('data-src')+ " is this many px from top "+elmFromTop+" window scroll is "+fromTop);
  if (fromTop < (winHeight - 100)) {
    //the number after winHeight is either above the bottom view (-) or below it (+)
    return true;
  }
}
var srcArray = [];

  jQuery(window).on("scroll load", function() {
    // images not backgrounds.

    jQuery("img").each(function() {
      var src = jQuery(this).attr("data-src");
      if (src != undefined) {

        if (srcArray.indexOf(src) === -1) {


          if (jQuery(this).isInViewport()) {
            var srcSet = jQuery(this).attr("data-srcset");
            jQuery(this).attr("src", src);
            jQuery(this).attr("srcset", srcSet);
            jQuery(this).removeAttr("data-src");
            jQuery(this).removeAttr("data-srcset");
          //  console.log("loaded: " + src);
            srcArray.push(src);
          }
        }
      }
    });
    jQuery(".bgLazy").each(function(){
      var style = jQuery(this).attr("data-style");
      if(jQuery(this).isInViewport()){
        jQuery(this).attr("style", style);
        jQuery(this).removeAttr("data-style");

      }
    });

    //console.log("array = " + srcArray);
  });
