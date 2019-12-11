require 'pry'
require_relative './lib/user'
require_relative './lib/tweet'


user1 = User.new("coffee_dad")
user2 = User.new("itsn0tmeitsu")
user3 = User.new("Xx_reddarkness_xX")
user4 = User.new("black1e_chan")
user5 = User.new("mav509")

tweet1 = Tweet.new("getting coffee", user1)
tweet2 = Tweet.new("whatever.", user3)
tweet3 = Tweet.new("brb", user2)
tweet4 = Tweet.new("enjoying my trip to london .", user4)
tweet5 = Tweet.new("watching rush hour 5 on live action 👀", user5)

binding.pry