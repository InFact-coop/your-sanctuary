defmodule YourSanctuaryWeb.Router do
  use YourSanctuaryWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", YourSanctuaryWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/practitioners", PageController, :practitioners
    get "/privacy", PageController, :privacy
    get "/talk-to-us", PageController, :talk_to_us

    get "/new-code", UserController, :new_code
    post "/generate-new-code", UserController, :generate_new_code

    post "/sign-in", SessionController, :create
    get "/logout", SessionController, :delete

    resources "/users", UserController, only: [:index, :create] do
      get "/callback", CallbackController, :show
      post "/callback", CallbackController, :create
    end

  end
end
