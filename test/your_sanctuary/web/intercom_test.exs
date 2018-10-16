defmodule YourSanctuaryWeb.IntercomTest do
  use ExUnit.Case
  import Mock
  alias YourSanctuaryWeb.{IntercomPrefferedTimes, IntercomRequest, IntercomRequestMock}

  defmacro with_request_mock(block) do
    quote do
      with_mock IntercomRequest, [post: fn(url, payload) -> IntercomRequestMock.post(url, payload) end] do
        unquote(block)
      end
    end
  end

  test "sending a preffered times to a user" do
    with_request_mock do
      message = "hello intercom"
      {:ok, :message_sent, res} = IntercomPrefferedTimes.send_preferred_times(%{user_id: "ACD12345", message: message})

      assert res["body"] == message
      assert res["type"] == "user_message"
    end
  end

  test "formats message correctly" do
    message = %{
      "topic" => "a topic",
      "time" => "evening",
      "day" => "mon",
      "phone" => "12345678"
    }

    formatted = IntercomPrefferedTimes.format_message(message)

    assert formatted =~ "a topic"
    assert formatted =~ "evening"
    assert formatted =~ "mon"
    assert formatted =~ "12345678"
  end

  test "returns error if user not found" do
    with_request_mock do
      message = "hello intercom"
      {:error, reason} = IntercomPrefferedTimes.send_preferred_times(%{user_id: "wrong id", message: message})

      assert reason == "not_found : User Not Found"
    end
  end

  test "returns error if bad request made" do
    with_request_mock do
      {:error, reason} = IntercomPrefferedTimes.send_preferred_times(%{user_id: "foo", message: %{bad: "message"}})

      assert reason == "http client error"
    end
  end
end
