require 'pry'
require_relative './lib/user'
require_relative './lib/review'
require_relative './lib/movie'

user1 = User.new("Tony")
user2 = User.new("Calvin")
user3 = User.new("Jay")
user4 = User.new("Alona")
user5 = User.new("Ben")

movie1 = Movie.new("Lilo & Stitch", 2002)
movie2 = Movie.new("The Matrix", 1999)
movie3 = Movie.new("There Will Be Blood", 2007)
movie4 = Movie.new("John Wick", 2014)
movie5 = Movie.new("Bill and Ted's Excellent Adventure", 1989)

review1 = Review.new(user4, movie2, 5, "A lot of cool yoga positions 🧘‍♀️.")
review2 = Review.new(user2, movie1, 5, "I cried. 🤣")

review3 = Review.new(user3, movie3, 3.5, "Great movie to distract children with.")

review4 = Review.new(user1, movie5, 3, "I may update the score when I see it.")
review5 = Review.new(user5, movie5, 4, "Be excellent to each other.")
review6 = Review.new(user5, movie2, 5, "Great!")

review7 = Review.new(user3, movie2, 4.5, "I would've taken both pills 💊")
review8 = Review.new(user3, movie5, 4, "Guitar sound")



binding.pry