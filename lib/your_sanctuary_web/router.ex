defmodule YourSanctuaryWeb.Router do
  use YourSanctuaryWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :jwt_authenticated do
    plug Guardian.AuthPipeline
  end

  scope "/api", YourSanctuaryWeb do
    pipe_through :api

    post "/sign_up", UserController, :sign_up
    post "/sign_in", UserController, :sign_in
  end

  scope "/", YourSanctuaryWeb do
    pipe_through :browser

    forward "/", Plugs.StaticPlug
  end
end
