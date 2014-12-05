#helper class, will be loaded at the beginging of the concatenation
class Barrayuda
  constructor: () ->
  @properties: (options) ->
    luckyTop = Math.floor(Math.random() * (700 - 0)) + 0
    luckySide = Math.floor(Math.random() * (options["size"] - 0)) + 0

    luckyZ = Math.floor(Math.random() * (5 - -5)) + -5
    return {
      "overflow":      "scroll",
      "position":      "absolute",
      "width":         options["size"] + "px",
      "height":        options["height"] + "px",
      "max-width":     "1000px",
      "max-height":    "800px",
      "min-width":     "200px",
      "min-height":    "400px",
      "margin-top":    "0px",
      "margin-left":   "0px",
      "margin-right":  "0px",
      "margin-bottom": "0px",
      "bottom":        "0px",
      "z-index":       luckyZ,
      "top":           luckyTop + "px",
      "left":          luckySide + "px",
      "right":         luckySide + "px",
    }
