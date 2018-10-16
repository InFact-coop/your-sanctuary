defmodule YourSanctuary.Accounts do
  import Ecto.Query, warn: false
  alias Ecto.Changeset
  alias YourSanctuary.{User, Callback, Repo}

  def get_user_by_uuid(uuid), do: Repo.get_by(User, uuid: uuid)
  def get_user_by_uuid_and_email(uuid,email), do: Repo.get_by(User, %{uuid: uuid, email: email})
  def get_user_by_email(email), do: Repo.get_by(User, email: email)

  def make_uuid do
    Ecto.UUID.generate()
    |> String.slice(0, 8)
    |> String.upcase()
  end

  def create_user(attrs \\ %{}) do
    uuid = attrs[:uuid] || make_uuid()
    %User{uuid: uuid}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def new_callback, do: Callback.changeset(%Callback{})

  def validate_callback(struct, params) do
    change =
      struct
      |> Callback.changeset(params)
      |> update_embedded_action(:send)

    case change do
      %Changeset{valid?: true} = changeset ->
        {:ok, changeset}
      changeset ->
        {:error, changeset}
    end
  end

  defp update_embedded_action(changeset, action) do
    %{changeset | action: action}
  end
end
