+function($) {
  $.fn.delOtroLado = function (options) {
    if (typeof options != 'undefined' ) {
      // if parameters exist
      if ( !('size' in options) ) {
        options['size'] = '120';
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
        'overflow':      'scroll',
        'float':         'right',
        'max-width':     options['size'] + 'px',
        'position':      'absolute',
        'margin-top':    '0px',
        'margin-left':   '0px',
        'margin-right':  '0px',
        'margin-bottom': '0px',
        'right':         '0px',
        'bottom':        '0px',
        'z-index':       elementLuckyZIndex,
        'top':           elementLuckyTopPositioning + 'px',
        'left':          elementLuckyLeftPositioning + 'px'
      });
  });
}(jQuery);
