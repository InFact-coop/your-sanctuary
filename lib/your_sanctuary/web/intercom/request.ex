defmodule YourSanctuaryWeb.IntercomRequest do
  require Intercom.Client

  @auth_config Intercom.Client.auth(System.get_env("INTERCOM_SECRET"), "")
  @application_json [{"Content-Type", "application/json"}]

  def post(url, body) do
    Intercom.Client.post(
      url,
      Poison.encode!(body),
      @application_json,
      hackney: @auth_config
    )
  end
end
