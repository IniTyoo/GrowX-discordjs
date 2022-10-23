while true do --- looping for checking http
  status = httpGet("example.com/statusbot")
  if status == "Online" then
    connect()
  else
    disconnect()
  end
  sleep(10000) -- idk
end
