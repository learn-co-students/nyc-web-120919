class Comment < ApplicationRecord
    belongs_to :meme
    belongs_to :user
end
