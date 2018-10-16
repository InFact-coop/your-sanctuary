defmodule YourSanctuaryWeb.AuthTest do
  use YourSanctuaryWeb.ConnCase
  alias YourSanctuaryWeb.Plugs.Auth

  setup %{conn: conn} do
    conn =
      conn
      |> bypass_through(YourSanctuaryWeb.Router, :browser)
      |> get("/")
    {:ok, %{conn: conn}}
  end

  test "init returns options as is" do
    assert Auth.init(%{}) == %{}
  end

  test "call with no user in session returns conn with user assigned to nil", %{conn: conn} do
    conn = Auth.call(conn, %{})
    assert conn.assigns.user == nil
  end

  test "call with existing user session assigns user to user struct", %{conn: conn} do
    user = insert_user()
    conn =
      conn
      |> put_session(:uuid, user.uuid)
      |> Auth.call(%{})

    assert conn.assigns.user == user
  end

  test "call with existing user just returns the conn", %{conn: conn} do
    user = insert_user()
    conn =
      conn
      |> put_session(:uuid, user.uuid)
      |> assign(:user, user)
      |> Auth.call(%{})

    assert conn.assigns.user == user
  end

  test "logs in a user and assigns the user to the conn", %{conn: conn} do
    user = insert_user()
    conn = Auth.login(conn, user)

    assert conn.assigns.user == user
    assert get_session(conn, :uuid) == user.uuid
  end

  test "logs out user and removes them from the conn", %{conn: conn} do
    user = insert_user()
    login_conn = Auth.login(conn, user)
    logout_conn =
      login_conn
      |> Auth.logout()
      |> send_resp(:ok, "")
      |> get("/")

    assert get_session(login_conn, :uuid) == user.uuid
    assert get_session(logout_conn, :uuid) == nil

    assert login_conn.assigns.user == user
    assert logout_conn.assigns.user == nil
  end
end
