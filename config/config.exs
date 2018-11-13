# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :your_sanctuary,
  ecto_repos: [YourSanctuary.Repo]

# Configures the endpoint
config :your_sanctuary, YourSanctuaryWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "1202GDTuWOj+dNF2J6Ix/Tfi/AQQ86w+OIgKiGwz3BgZaMuVQQgLt6YZe2vQAykv",
  render_errors: [view: YourSanctuaryWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: YourSanctuary.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Guardian config
config :your_sanctuary, YourSanctuaryWeb.Guardian,
  issuer: "your-sanctuary",
  secret_key: System.get_env("GUARDIAN_SECRET_KEY")

config :your_sanctuary, YourSanctuary.Mailer,
  adapter: Bamboo.MailgunAdapter,
  api_key: System.get_env("MAILGUN_KEY"),
  domain: System.get_env("MAILGUN_DOMAIN")

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
