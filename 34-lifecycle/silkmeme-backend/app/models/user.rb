class User < ApplicationRecord
    has_many :stories
    has_many :memes, through: :user_meme
    validates :username, uniqueness: true

    has_secure_password
end
