$ = jQuery
$.fn.delOtroLado = (options) ->
  unless typeof options is "undefined"

    # if parameters exist
    options["size"] = "200"  unless "size" of options
    options["height"] = "450"  unless "height" of options
  else

    # default parameters
    options = {}
    options["size"] = "200"
    options["height"] = "450"

  $(@).find("*").each ->
    $(@).css Barrayuda.properties(options)
    $(@).css "left": ""
    return

  return $(@)
