class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :name 
      t.string :make 
      t.string :model 
      t.string :color
      t.integer :year
    end
  end
end

# name, make, model, color, year