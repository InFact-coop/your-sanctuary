defmodule YourSanctuaryWeb.UserController do
  use YourSanctuaryWeb, :controller

  alias YourSanctuary.Accounts
  alias YourSanctuary.Accounts.User
  alias YourSanctuaryWeb.Guardian

  action_fallback YourSanctuaryWeb.FallbackController

  def sign_up(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Accounts.create_user(user_params),
         {:ok, token, _claims} <- Guardian.encode_and_sign(user) do
      conn |> render("jwt.json", jwt: token)
    end
  end

  def sign_in(conn, %{"uuid" => uuid}) do
    case Accounts.token_sign_in(uuid) do
      {:ok, token, _claims} ->
        conn |> render("jwt.json", jwt: token)

      _ ->
        {:error, :unauthorized}
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end
end
