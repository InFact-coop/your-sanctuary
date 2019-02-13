defmodule YourSanctuaryWeb.CrispController do
  use YourSanctuaryWeb, :controller

  action_fallback(YourSanctuaryWeb.FallbackController)

  def crisp_online(conn, %{}) do
    crisp_identifier = System.get_env("CRISP_IDENTIFIER")
    crisp_key = System.get_env("CRISP_KEY")
    crisp_auth = Base.encode64("#{crisp_identifier}:#{crisp_key}")

    case HTTPoison.get(
           "https://api.crisp.chat/v1/website/eb431f6c-af5b-4a5b-8822-b71066070599/availability/status",
           [
             {"Authorization", "Basic #{crisp_auth}"}
           ]
         ) do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        res = Poison.decode!(body)

        conn
        |> put_status(200)
        |> json(res)

      _ ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "Could not connect to crisp"})
    end
  end
end
