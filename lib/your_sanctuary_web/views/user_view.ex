defmodule YourSanctuaryWeb.UserView do
  use YourSanctuaryWeb, :view
  alias YourSanctuaryWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("show_user_with_jwt.json", %{user: user, jwt: jwt}) do
    %{data: %{user: render_one(user, UserView, "user.json"), jwt: jwt}}
  end

  def render("user.json", %{user: user}) do
    %{email: user.email, uuid: user.uuid}
  end
end
