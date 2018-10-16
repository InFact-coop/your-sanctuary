defmodule YourSanctuaryWeb.CallbackControllerTest do
  use YourSanctuaryWeb.ConnCase

  setup %{conn: conn} = config do
    if user_id = config[:login_as] do
      user = insert_user(%{uuid: user_id})
      conn = assign(conn, :user, user)
      {:ok, conn: conn, user: user}
    else
      :ok
    end
  end

  @valid_callback_form %{topic: "TESTING - IGNORE - DO NOT NEED TO REPLY",
                         phone: "TESTING - IGNORE - DO NOT NEED TO REPLY",
                         time: "TESTING - IGNORE - DO NOT NEED TO REPLY",
                         day: "TESTING - IGNORE - DO NOT NEED TO REPLY"}

  @invalid_callback_form %{topic: "TESTING - IGNORE - DO NOT NEED TO REPLY",
                           day: "TESTING - IGNORE - DO NOT NEED TO REPLY"}

  @existing_intercom_user "EAC31107"
  @non_existing_intecom_user "A234323"

  @tag login_as: @existing_intercom_user
  test "logged in user is show callback view", %{conn: conn, user: user} do
    conn = get conn, user_callback_path(conn, :show, user)

    contents = [
      "good to talk",
      "afternoon",
      "evening"
    ]

    Enum.map contents, fn content ->
      assert html_response(conn, 200) =~ content
    end
  end

  test "logged out user is redirected back to home page", %{conn: conn} do
    user = insert_user()
    conn = get conn, user_callback_path(conn, :show, user)

    assert get_flash(conn, :error) =~ "You must be logged in to see that page"
    assert get_session(conn, :uuid) == nil
    assert redirected_to(conn) == page_path(conn, :index)
  end

  @tag login_as: @existing_intercom_user
  test "can send message to intercom", %{conn: conn, user: user} do
    conn = post conn, user_callback_path(conn, :create, user), %{callback: @valid_callback_form}

    #assert html_response(conn, 200) =~ "We'll text you to arrange a call, we aim to be in touch within 24 hours."
  end

  @tag login_as: @existing_intercom_user
  test "form with missing fields does not send message to intercom", %{conn: conn, user: user} do
    conn = post conn, user_callback_path(conn, :create, user), %{callback: @invalid_callback_form}

    assert get_flash(conn, :error) =~ "Please fill in the missing fields"
    assert {:time, {"please choose a time of day", [validation: :required]}} in conn.assigns.changeset.errors
  end

  @tag login_as: @non_existing_intecom_user
  test "message fails for non-existing intercom user", %{conn: conn, user: user} do
    conn = post conn, user_callback_path(conn, :create, user), %{callback: @valid_callback_form}

    assert get_flash(conn, :error) =~ "Something went wrong"
  end
end
