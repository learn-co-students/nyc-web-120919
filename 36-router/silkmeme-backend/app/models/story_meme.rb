class StoryMeme < ApplicationRecord
  belongs_to :meme
  belongs_to :story
end
