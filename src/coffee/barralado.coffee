$ = jQuery
$.fn.barralado = (options) ->
  unless typeof options is "undefined"

    # if parameters exist
    options["size"] = "120"  unless "size" of options
  else

    # default parameters
    options = {}
    options["size"] = "120"

  $(@).find("*").each ->
    $(@).css Barrayuda.properties(options)
    $(@).css "right": ""
    return

  return $(@)
