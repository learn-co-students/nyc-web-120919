class Meme < ApplicationRecord
    belongs_to :subreddit
    has_many :users, through: :user_meme
end
