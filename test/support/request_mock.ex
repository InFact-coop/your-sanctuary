defmodule YourSanctuaryWeb.IntercomRequestMock do

  def post(_url, %{from: %{user_id: "ACD12345"}} = payload) do
    {:ok, successful_response(payload)}
  end

  def post(_url, %{body: %{bad: "message"}}) do
    {:error, "bad request"}
  end

  def post(_url, %{from: %{user_id: _}}) do
    {:ok, user_not_found()}
  end

  defp successful_response(%{body: body}) do
     %HTTPoison.Response{
       body: "{\"type\":\"user_message\",\"id\":\"106420059\",\"created_at\":1496851013,\"body\":\"" <> body <> "\",\"message_type\":\"inapp\"}",
       headers: [{"Date", "Wed, 07 Jun 2017 15:56:54 GMT"},
         {"Content-Type", "application/json; charset=utf-8"},
         {"Transfer-Encoding", "chunked"}, {"Connection", "keep-alive"},
         {"Status", "200 OK"},
         {"Strict-Transport-Security",
          "max-age=31557600; includeSubDomains; preload"},
         {"X-RateLimit-Limit", "83"}, {"X-RateLimit-Remaining", "83"},
         {"X-RateLimit-Reset", "1496851020"},
         {"Set-Cookie",
          "_mkra_ctxt=f531dbdc3e49eef34251970dd8caf44e--200; path=/; max-age=5; HttpOnly; secure"},
         {"X-Intercom-Version", "0eab9e12c2bab8076b7d445d85f4550ad22c423c"},
         {"ETag", "W/\"fefd54523870382b145885cdcfc64db4\""},
         {"Cache-Control", "max-age=0, private, must-revalidate"},
         {"X-Request-Id", "asgd2u1etv4gohsvg3u0"}, {"X-Runtime", "0.987753"},
         {"X-Content-Type-Options", "nosniff"}, {"X-Frame-Options", "SAMEORIGIN"},
         {"X-XSS-Protection", "1; mode=block"}, {"Vary", "Accept-Encoding"},
         {"Server", "nginx"}],
         status_code: 200
     }
  end

  def user_not_found do
     %HTTPoison.Response{
       body: "{\"type\":\"error.list\",\"request_id\":\"asgdiq0mq0tmebr2g0h0\",\"errors\":[{\"code\":\"not_found\",\"message\":\"User Not Found\"}]}",
       headers: [{"Date", "Wed, 07 Jun 2017 16:31:34 GMT"},
         {"Content-Type", "application/json; charset=utf-8"},
         {"Transfer-Encoding", "chunked"}, {"Connection", "keep-alive"},
         {"Status", "404 Not Found"},
         {"Strict-Transport-Security",
          "max-age=31557600; includeSubDomains; preload"},
         {"Set-Cookie",
          "_mkra_ctxt=08af312a809f478ab6dea52d0fac5b5b--404; path=/; max-age=5; HttpOnly; secure"},
         {"X-Intercom-Version", "a5b3b39ee63191f90d4ec333c28b0ff194a4850a"},
         {"Cache-Control", "no-cache"}, {"X-Request-Id", "asgdiq0mq0tmebr2g0h0"},
         {"X-Runtime", "0.059933"}, {"X-Content-Type-Options", "nosniff"},
         {"X-Frame-Options", "SAMEORIGIN"}, {"X-XSS-Protection", "1; mode=block"},
         {"Vary", "Accept-Encoding"}, {"Server", "nginx"}],
        status_code: 404
    }
  end
end
