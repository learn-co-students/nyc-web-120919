require './config/environment'

puts "Hello welcome to Movie Review 3000"

puts "would you like to see a list of movies that you can review?"

input = gets.chomp

if input == "y"
  puts Movie.all
else
  puts "Bye bye now"
end