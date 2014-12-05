var $;

$ = jQuery;

$.fn.delOtroLado = function(options) {
  if (typeof options !== "undefined") {
    if (!("size" in options)) {
      options["size"] = "200";
    }
    if (!("height" in options)) {
      options["height"] = "450";
    }
  } else {
    options = {};
    options["size"] = "200";
    options["height"] = "450";
  }
  $(this).find("*").each(function() {
    $(this).css(Barrayuda.properties(options));
    $(this).css({
      "left": ""
    });
  });
  return $(this);
};
