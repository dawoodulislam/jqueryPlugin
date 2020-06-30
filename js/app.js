;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;

    $('#rssupdates').FeedEk({
      FeedUrl : 'https://github.com/ivaldi/prezento/commits/master.atom',
      MaxCount : 1,
      ShowDesc : true,
      ShowPubDate:true,
      DescCharacterLimit:100,
      TitleLinkTarget:'_blank'
    });


    jQuery('.prezento-holder').prezento({
      devices: [{
        name: 'imac',
        deviceImageSRC: '../img/imac.png',
        xLeftTop: 182,
        yLeftTop: 110,
        xRightBottom: 2106,
        yRightBottom: 1262,
        breakpoint: 1440,
        bgImgSrc : '../img/web-design-huge.jpg',
        bgTransitionDuration: '12s'
      },{
        name: 'macbookpro',
        deviceImageSRC: '../img/mbp.png',
        xLeftTop: 124,
        yLeftTop: 36,
        xRightBottom: 876,
        yRightBottom: 505,
        breakpoint: 860,
        bgImgSrc : '../img/web-design-large.jpg',
        bgTransitionDuration: '12s'
      },{
        name: 'ipad',
        deviceImageSRC: '../img/ipad.png',
        xLeftTop: 110,
        yLeftTop: 110,
        xRightBottom: 890,
        yRightBottom: 1144,
        breakpoint: 480,
        bgImgSrc : '../img/web-design-med.jpg',
        bgTransitionDuration: '15s'
      },{
        name: 'iphone',
        deviceImageSRC: '../img/iphone.png',
        xLeftTop: 40,
        yLeftTop: 134,
        xRightBottom: 440,
        yRightBottom: 830,
        breakpoint: 0,
        bgImgSrc : '../img/web-design-small.jpg',
        bgTransitionDuration: '4s'
      }], 
      startAfterScroll: true,
      resetWhenBelow: true,
      responsive: 'window'
    });


  });

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);