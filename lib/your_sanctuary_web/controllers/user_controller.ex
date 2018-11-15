defmodule YourSanctuaryWeb.UserController do
  use YourSanctuaryWeb, :controller

  alias YourSanctuary.Accounts
  alias YourSanctuary.Accounts.User
  alias YourSanctuaryWeb.Guardian
  alias YourSanctuaryWeb.ChangesetView

  action_fallback YourSanctuaryWeb.FallbackController

  def sign_up(conn, %{"user" => user_params}) do
    case Accounts.create_user(user_params) do
      {:ok, %User{} = user} ->
        with {:ok, token, _claims} <- Guardian.encode_and_sign(user) do
          conn
          |> render("show_user_with_jwt.json", jwt: token, user: user)
        else
          _ ->
            conn
            |> put_status(:unauthorized)
            |> json(%{error: "Could not authorise user"})
        end

      {:error, %Ecto.Changeset{} = error} ->
        conn
        |> put_status(:unauthorized)
        |> json(ChangesetView.translate_errors(error))

      _ ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "other error"})
    end
  end

  def sign_in(conn, %{"uuid" => uuid}) do
    case Accounts.token_sign_in(uuid) do
      {{:ok, token, _claims}, %User{} = user} ->
        conn |> render("show_user_with_jwt.json", jwt: token, user: user)

      _ ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "We do not recognise that code"})
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end
end
