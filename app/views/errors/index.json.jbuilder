json.array!(@errors) do |error|
  json.extract! error, :id, :name
  json.url error_url(error, format: :json)
end
