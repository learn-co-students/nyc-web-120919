class Story < ApplicationRecord
    has_many :memes, through: :story_meme
    belongs_to :user
end
