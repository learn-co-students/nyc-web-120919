class CreateMemes < ActiveRecord::Migration[6.0]
  def change
    create_table :memes do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.belongs_to :subreddit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
