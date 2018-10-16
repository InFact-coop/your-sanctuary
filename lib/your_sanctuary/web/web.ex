defmodule YourSanctuaryWeb do
  @moduledoc """
  A module that keeps using definitions for controllers,
  views and so on.

  This can be used in your application as:

      use YourSanctuaryWeb, :controller
      use YourSanctuaryWeb, :view

  The definitions below will be executed for every view,
  controller, etc, so keep them short and clean, focused
  on imports, uses and aliases.

  Do NOT define functions inside the quoted expressions
  below.
  """

  def controller do
    quote do
      use Phoenix.Controller, namespace: YourSanctuaryWeb
      import Plug.Conn
      import YourSanctuaryWeb.Router.Helpers
      import YourSanctuaryWeb.Gettext
    end
  end

  def view do
    quote do
      use Phoenix.View, root: "lib/your_sanctuary/web/templates",
                        namespace: YourSanctuaryWeb

      # Import convenience functions from controllers
      import Phoenix.Controller, only: [get_csrf_token: 0, get_flash: 2, view_module: 1, action_name: 1]

      # Use all HTML functionality (forms, tags, etc)
      use Phoenix.HTML

      import YourSanctuaryWeb.Router.Helpers
      import YourSanctuaryWeb.ErrorHelpers
      import YourSanctuaryWeb.Gettext
      import YourSanctuaryWeb.CssHelpers
    end
  end

  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
      import Phoenix.Controller
    end
  end

  def channel do
    quote do
      use Phoenix.Channel
      import YourSanctuaryWeb.Gettext
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
