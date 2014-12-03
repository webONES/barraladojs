+function($) {
  $.fn.barralado = function (options) {
  if (typeof options != 'undefined' ) {
    // if parameters exist
    if ( !('size' in options) ) {
      options['size'] = '120';
    }
    if ( !('unorder' in options) ) {
      options['unorder'] = true;
    }
  } else {
    // default parameters
    options = {};
    options['size'] = '120';
  }

  $(this).find('*').each(function(){
    elementLuckyTopPositioning = Math.floor(Math.random() * (500 - 0)) + 0;
    elementLuckyLeftPositioning = Math.floor(Math.random() * (options['size'] - 0)) + 0;
    elementLuckyZIndex = Math.floor(Math.random() * (5 - -5)) + -5;
    $(this).css({
      'float': 'left',
      'max-width': options['size'] + 'px',
      'position': 'absolute',
      'margin-top': '0px',
      'top': elementLuckyTopPositioning + 'px',
      'left': elementLuckyLeftPositioning + 'px',
      'right': '0px',
      'bottom': '0px',
      'overflow': 'scroll',
      'z-index': elementLuckyZIndex
      });
  });
}
}(jQuery);