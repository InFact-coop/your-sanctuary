defmodule YourSanctuaryWeb.Guardian.AuthPipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :your_sanctuary,
    module: YourSanctuaryWeb.Guardian,
    error_handler: YourSanctuaryWeb.AuthErrorHandler

  plug Guardian.Plug.VerifyHeader, realm: "Bearer"
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
