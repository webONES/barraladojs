$.fn.delOtroLado = (options) ->
  unless typeof options is "undefined"

    # if parameters exist
    options["size"] = "120"  unless "size" of options
  else

    # default parameters
    options = {}
    options["size"] = "120"

  $(@).find("*").each ->
    luckyTop = Math.floor(Math.random() * (500 - 0)) + 0
    luckyLeft = Math.floor(Math.random() * (options["size"] - 0)) + 0
    luckyZ = Math.floor(Math.random() * (5 - -5)) + -5
    Barrayuda.sayHello()
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
      "z-index": luckyZ
      "top": luckyTop + "px"
      "left": luckyLeft + "px"

    return

  return

return
