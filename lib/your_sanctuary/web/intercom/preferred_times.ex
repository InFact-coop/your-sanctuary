defmodule YourSanctuaryWeb.IntercomPrefferedTimes do
  alias YourSanctuaryWeb.IntercomRequest

  def send_preferred_times(%{user_id: user_id, message: message}) do
    payload = %{
      from: %{type: "user", user_id: user_id},
      body: message
    }

    IntercomRequest.post("/messages", payload)
    |> handle_response()
  end

  def format_message(%{"topic" => topic, "time" => time, "day" => day, "phone" => phone}) do
    "Hi, could you call me back on #{day} in the #{time}? My number is #{phone} and I'd like to talk about... #{topic}"
  end

  defp handle_response({:ok, %{status_code: 200, body: body}}) do
    {:ok, :message_sent, Poison.Parser.parse!(body)}
  end

  defp handle_response({:ok, %{status_code: _, body: body}}) do
    {:error, render_error(body)}
  end

  defp handle_response({:error, _}) do
    {:error, "http client error"}
  end

  defp render_error(body) do
    %{"errors" => [errors]} = Poison.Parser.parse!(body)
    "#{errors["code"]} : #{errors["message"]}"
  end
end
