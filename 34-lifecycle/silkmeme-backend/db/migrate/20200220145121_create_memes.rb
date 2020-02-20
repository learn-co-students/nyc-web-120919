class CreateMemes < ActiveRecord::Migration[6.0]
  def change
    create_table :memes do |t|
      t.string :title
      t.string :url
      t.belongs_to :subreddit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
