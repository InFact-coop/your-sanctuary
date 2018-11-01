defmodule YourSanctuaryWeb.PageController do
  use YourSanctuaryWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
