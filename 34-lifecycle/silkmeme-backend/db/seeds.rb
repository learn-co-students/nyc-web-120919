# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = ["Greg", "Caryn", "Ian", "Matt"]
students = []
subreddits = ['memes', 'dankmemes', 'meirl']
memes = []

users.each do |user|
    User.create(
            username: user,
            password: "123456",
            admin: true
    )
end

students.each do |user|
    User.create(
            username: user,
            password: "123456",
            admin: false
    )
end

subreddits.each do |subreddit|
    Subreddit.create(
        name: subreddit
    )
end
