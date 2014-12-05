(function() {
  var Barrayuda;

  Barrayuda = function() {
    return {};
  };

  Barrayuda.prototype.sayHello = function(argument) {
    return console.log('Hello');
  };

}).call(this);

(function() {
  (function($) {
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
        var elementLuckyLeftPositioning, elementLuckyTopPositioning, elementLuckyZIndex;
        elementLuckyTopPositioning = Math.floor(Math.random() * (500 - 0)) + 0;
        elementLuckyLeftPositioning = Math.floor(Math.random() * (options["size"] - 0)) + 0;
        elementLuckyZIndex = Math.floor(Math.random() * (5 - -5)) + -5;
        Barrayuda.prototype.sayHello();
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
          "z-index": elementLuckyZIndex,
          "top": elementLuckyTopPositioning + "px",
          "left": elementLuckyLeftPositioning + "px"
        });
      });
    };
  })(jQuery);

}).call(this);
