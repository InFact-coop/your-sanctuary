defmodule YourSanctuaryWeb.PageController do
  use YourSanctuaryWeb, :controller

  def index(conn, _params) do
    conn
    |> json(%{great: "success"})
  end
end
