defmodule YourSanctuaryWeb.PageControllerTest do
  use YourSanctuaryWeb.ConnCase

  test "non logged in user sees options to start conversation and enter code", %{conn: conn} do
    conn = get conn, "/"

    contents = [
      "Action for Children",
      "intercom",
      "form",
      "Continue a conversation",
    ]

    Enum.map contents, fn content ->
      assert html_response(conn, 200) =~ content
    end
  end

  test "logged in user redirected to conversation", %{conn: conn} do
    user = insert_user()
    conn = assign(conn, :user, user)
    conn = get conn, "/"

    assert redirected_to(conn) == "/users"
  end

end
