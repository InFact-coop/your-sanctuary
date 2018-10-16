defmodule YourSanctuaryWeb.CssHelpers do
  @moduledoc """
  tachyons styles for common components
  """

  def red_button do
    styles([
      "white", "bg-dark-red", "hover-bg-red",
      "bn", "br3", "w-80-ns", "w-100",
      button()
    ])
  end

  def white_button do
    styles([
      "red", "bg-white", "hover-bg-white",
      "bn", "br3",
      button()
    ])
  end

  def button do
    styles([
      "center",
      "f5",
      "ph4", "pv3",
      "outline-0", "pointer",
      "t3", "all", "ease"
    ])
  end

  defp styles(styles) do
    styles
    |> List.flatten()
    |> Enum.join(" ")
  end
end
