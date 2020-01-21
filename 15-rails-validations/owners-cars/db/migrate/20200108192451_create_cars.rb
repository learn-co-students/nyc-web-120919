class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :make
      t.string :model
      t.string :color
      t.integer :year

      t.timestamps
    end
  end
end
