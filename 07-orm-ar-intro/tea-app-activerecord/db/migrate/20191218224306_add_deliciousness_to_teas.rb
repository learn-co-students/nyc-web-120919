class AddDeliciousnessToTeas < ActiveRecord::Migration[5.2]
  def change
    add_column :teas, :deliciousness, :integer
  end
end
