defmodule YourSanctuary.Repo.Migrations.AddUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :uuid, :string
    end
  end
end
