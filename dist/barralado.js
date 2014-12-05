;(function ($) {
(function() {
  var Barrayuda;

  Barrayuda = (function() {
    function Barrayuda() {}

    Barrayuda.sayHello = function(argument) {
      return alert('hi');
    };

    return Barrayuda;

  })();

}).call(this);

(function() {
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
      var luckyLeft, luckyTop, luckyZ;
      luckyTop = Math.floor(Math.random() * (500 - 0)) + 0;
      luckyLeft = Math.floor(Math.random() * (options["size"] - 0)) + 0;
      luckyZ = Math.floor(Math.random() * (5 - -5)) + -5;
      Barrayuda.sayHello();
      $(this).css({
        overflow: "scroll",
        float: "left",
        "max-width": options["size"] + "px",
        position: "absolute",
        "margin-top": "0px",
        "margin-left": "0px",
        "margin-right": "0px",
        "margin-bottom": "0px",
        "right": "0px",
        "bottom": "0px",
        "z-index": luckyZ,
        "top": luckyTop + "px",
        "left": luckyLeft + "px"
      });
    });
  };

  return;

}).call(this);

(function() {
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
      var luckyLeft, luckyTop, luckyZ;
      luckyTop = Math.floor(Math.random() * (500 - 0)) + 0;
      luckyLeft = Math.floor(Math.random() * (options["size"] - 0)) + 0;
      luckyZ = Math.floor(Math.random() * (5 - -5)) + -5;
      Barrayuda.sayHello();
      $(this).css({
        overflow: "scroll",
        float: "left",
        "max-width": options["size"] + "px",
        position: "absolute",
        "margin-top": "0px",
        "margin-left": "0px",
        "margin-right": "0px",
        "margin-bottom": "0px",
        "right": "0px",
        "bottom": "0px",
        "z-index": luckyZ,
        "top": luckyTop + "px",
        "left": luckyLeft + "px"
      });
    });
  };

  return;

}).call(this);

})(jQuery);