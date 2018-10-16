defmodule YourSanctuaryWeb.CallbackView do
  use YourSanctuaryWeb, :view

  def days, do: {
    ["monday", "tuesday", "wednesday", "thursday"],
    ["friday", "any"]
  }

  def times, do: ["afternoon", "evening"]

  def abbreviate_day("thursday"), do: "thurs"
  def abbreviate_day("tuesday"), do: "tues"
  def abbreviate_day(day), do: String.slice day, 0, 3
end
