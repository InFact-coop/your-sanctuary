use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :your_sanctuary, YourSanctuaryWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :your_sanctuary, YourSanctuary.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "j0bb3hplop",
  database: "your_sanctuary_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
