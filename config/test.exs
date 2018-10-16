use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :action_for_children, YourSanctuaryWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :action_for_children, YourSanctuary.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "j0bb3hplop",
  database: "action_for_children_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
