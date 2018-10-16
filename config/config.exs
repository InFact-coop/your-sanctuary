# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :your_sanctuary,
  ecto_repos: [YourSanctuary.Repo]

config :sendgrid,
  api_key: System.get_env("SENDGRID_API_KEY")

# Configures the endpoint
config :your_sanctuary, YourSanctuaryWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: YourSanctuaryWeb.ErrorView, accepts: ~w(html json)],
  secret_key_base: System.get_env("SECRET_KEY_BASE"),
  pubsub: [name: YourSanctuary.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
