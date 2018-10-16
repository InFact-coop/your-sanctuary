defmodule YourSanctuaryWeb.TestHelpers do
  alias YourSanctuary.{Repo, User}
  def insert_user(attrs \\ %{}) do
    uuid =
      Ecto.UUID.generate()
      |> String.slice(0, 8)
      |> String.upcase()

    %User{uuid: uuid, email: "test@example.com"}
    |> User.changeset(attrs)
    |> Repo.insert!()
  end
end
