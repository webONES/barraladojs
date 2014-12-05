(($) ->
  $.fn.barralado = (options) ->
    unless typeof options is "undefined"

      # if parameters exist
      options["size"] = "120"  unless "size" of options
    else

      # default parameters
      options = {}
      options["size"] = "120"
    $(@).find("*").each ->
      elementLuckyTopPositioning = Math.floor(Math.random() * (500 - 0)) + 0
      elementLuckyLeftPositioning = Math.floor(
        Math.random() * (options["size"] - 0)
      ) + 0
      elementLuckyZIndex = Math.floor(Math.random() * (5 - -5)) + -5
      Barrayuda.prototype.sayHello()
      $(@).css
        overflow: "scroll"
        float: "left"
        "max-width": options["size"] + "px"
        position: "absolute"
        "margin-top": "0px"
        "margin-left": "0px"
        "margin-right": "0px"
        "margin-bottom": "0px"
        "right": "0px"
        "bottom": "0px"
        "z-index": elementLuckyZIndex
        "top": elementLuckyTopPositioning + "px"
        "left": elementLuckyLeftPositioning + "px"

      return

    return

  return
) jQuery
