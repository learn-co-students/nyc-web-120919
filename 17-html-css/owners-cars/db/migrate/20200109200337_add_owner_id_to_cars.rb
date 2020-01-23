class AddOwnerIdToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :owner_id, :integer
  end
end
