defmodule YourSanctuaryWeb.CssHelpersTest do
  use ExUnit.Case
  alias YourSanctuaryWeb.CssHelpers

  test "formats a list of styles into a valid class string" do
    button_styles = CssHelpers.button()
    button_classes = String.split(button_styles, " ")

    assert String.length(button_styles) > 0
    assert length(button_classes) > 0
  end

  test "composes styles correctly" do
    button_styles = CssHelpers.button()
    red_button_styles = CssHelpers.red_button()

    assert red_button_styles =~ button_styles
  end
end
