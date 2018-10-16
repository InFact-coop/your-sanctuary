defmodule YourSanctuary.AccountsTest do
  use YourSanctuary.DataCase

  alias YourSanctuary.{Accounts, User, Callback}

  test "get_user_by_uuid/1 fetches correct user" do
    existing_user = insert_user()
    assert (%User{} = user) = Accounts.get_user_by_uuid(existing_user.uuid)
    assert existing_user.uuid == user.uuid
  end

  test "get_user_by_uuid/1 returns nil for non-existing user" do
    uuid = Ecto.UUID.generate()
    assert Accounts.get_user_by_uuid(uuid) == nil
  end

  test "new_callback/0 returns an fresh callback changeset" do
    %Ecto.Changeset{valid?: valid, action: action} = Accounts.new_callback()

    refute valid
    assert action == nil
  end

  test "validate_callback/2 with valid data returns ok with a changeset and updated action" do
    params = %{
      phone: "07784823456",
      day: "mon",
      time: "afternooon"
    }
    {:ok, changeset} = Accounts.validate_callback(%Callback{}, params)

    assert changeset.valid?
    assert changeset.action == :send
    assert changeset.errors == []
  end

  test "validate_callback/2 with invalid data returns error with a changeset" do
    invalid_params = %{}
    {:error, changeset} = Accounts.validate_callback(%Callback{}, invalid_params)

    refute changeset.valid?
    assert length(changeset.errors) == 3
  end
end
