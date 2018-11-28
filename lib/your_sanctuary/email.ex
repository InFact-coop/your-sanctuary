defmodule YourSanctuary.Email do
  use Bamboo.Phoenix, view: YourSanctuaryWeb.EmailView

  def send_reminder_email(to_email, uuid) do
    new_email()
    |> to(to_email)
    |> from("order.fulfilment@bigblueshop.co.uk")
    |> subject("Forgotten code")
    |> assign(:uuid, uuid)
    |> render(:reminder_email)
  end
end
