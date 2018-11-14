defmodule YourSanctuaryWeb.PasswordController do
  use YourSanctuaryWeb, :controller

  alias YourSanctuary.{Email, Mailer, Accounts}

  action_fallback(YourSanctuaryWeb.FallbackController)

  def code_reminder(conn, %{"email" => email}) do
    user = Accounts.get_user_by_email(email)

    case user do
      nil ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "This email isn't in our database"})

      user ->
        Email.send_reminder_email(user.email, user.uuid)
        |> Mailer.deliver_later()

        conn
        |> json(%{info: "A reminder email has been sent to you."})
    end
  end
end
