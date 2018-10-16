defmodule YourSanctuaryWeb.UserController do
  use YourSanctuaryWeb, :controller
  alias YourSanctuary.{Accounts, User}
  alias YourSanctuaryWeb.Plugs.Auth
  alias SendGrid.{Email, Mailer}

  plug Auth

  def new_code(conn, _params) do
    conn
    |> render("new_code.html")
  end

  def generate_new_code(conn, %{"user" => %{"email" => email}}) do
    case Accounts.get_user_by_email(email) do
      %User{} = user ->
        Email.build()
        |> Email.add_to(user.email)
        |> Email.put_from("ask.us@actionforchildren.org.uk")
        |> Email.put_subject("Your Action For Children Code")
        |> Email.put_text("Your code is #{user.uuid}")
        |> Mailer.send()

        conn
        |> put_flash(
          :error,
          "We have sent you an email with your new code, please check your inbox"
        )
        |> redirect(to: "#{user_path(conn, :new_code)}")

      nil ->
        conn
        |> put_flash(:error, "Can not find your email address, start a new conversation instead?")
        |> redirect(to: page_path(conn, :talk_to_us))
    end
  end

  def index(conn, _params) do
    uuid = get_session(conn, :uuid)

    unless uuid do
      conn
      |> put_flash(:error, "Please select an option below first")
      |> redirect(to: page_path(conn, :talk_to_us))
    else
      case Accounts.get_user_by_uuid(uuid) do
        %User{} = user ->
          conn
          |> render("show.html", user: user)

        nil ->
          conn
          |> put_flash(:error, "Please select an option below first")
          |> redirect(to: page_path(conn, :talk_to_us))
      end
    end
  end

  def create(conn, %{"user" => %{"email" => email}}) do
    case Accounts.get_user_by_email(email) do
      %User{} = _user ->
        conn
        |> put_flash(
          :error,
          "Email address already in use, please continue your conversation using your unique code below"
        )
        |> redirect(to: page_path(conn, :talk_to_us))

      nil ->
        {:ok, %User{} = user} = Accounts.create_user(%{email: email})

        headers = [
          Authorization: "Bearer #{System.get_env("INTERCOM_SECRET")}",
          Accept: "application/json",
          "Content-Type": "application/json"
        ]

        body = Poison.encode!(%{user_id: user.uuid, email: user.email})

        HTTPoison.post(
          "https://api.intercom.io/users",
          body,
          headers
        )

        conn
        |> Auth.login(user)
        |> redirect(to: user_path(conn, :index))
    end
  end
end
