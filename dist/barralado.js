var Barrayuda;

Barrayuda = (function() {
  function Barrayuda() {}

  Barrayuda.properties = function(options) {
    var luckySide, luckyTop, luckyZ;
    luckyTop = Math.floor(Math.random() * (500 - 0)) + 0;
    luckySide = Math.floor(Math.random() * (options["size"] - 0)) + 0;
    luckyZ = Math.floor(Math.random() * (5 - -5)) + -5;
    return {
      "overflow": "scroll",
      "position": "absolute",
      "max-width": options["size"] + "px",
      "margin-top": "0px",
      "margin-left": "0px",
      "margin-right": "0px",
      "margin-bottom": "0px",
      "bottom": "0px",
      "z-index": luckyZ,
      "top": luckyTop + "px",
      "left": luckySide + "px",
      "right": luckySide + "px"
    };
  };

  return Barrayuda;

})();

var $;

$ = jQuery;

$.fn.delOtroLado = function(options) {
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
      "left": ""
    });
  });
  return $(this);
};

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
