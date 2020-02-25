class CreateStoryMemes < ActiveRecord::Migration[6.0]
  def change
    create_table :story_memes do |t|
      t.belongs_to :meme, null: false, foreign_key: true
      t.belongs_to :story, null: false, foreign_key: true
      t.integer :position

      t.timestamps
    end
  end
end
