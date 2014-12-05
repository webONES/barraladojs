var $;

$ = jQuery;

$.fn.barralado = function(options) {
  if (typeof options !== "undefined") {
    if (!("size" in options)) {
      options["size"] = "120";
    }
  } else {
    options = {};
    options["size"] = "120";
  }
  $(this).find("*").each(function() {
    $(this).css(Barrayuda.properties(options));
    $(this).css({
      "right": ""
    });
  });
  return $(this);
};
