require 'pry'
# Designing something (computers?) to do what you want it do to
# communicating with the computers

# data
# set of information

# integers
# strings
# bools
# symbols
# arrays
# hashes

# procedures
# instructions
# operations
# manipulating the data


fruit_basket  = [
  "durian", 
  "kumquat", 
  "lychee", 
  "starfruit"
]


students_per_mod = {
  "mod1" => 10,
  "mod2" => 14,
  "mod3" => 18,
  "mod4" => 10,
  "mod5" => 1
}

# fruit_basket.each do |fruit|
#   puts fruit
# end

# students_per_mod.each do |key, value|
#   puts "There are #{value} student(s) in #{key}."
# end

#each
# very general, very flexible, just does something for each item in an enumerable.

some_numbers = [1,2,3,4,5,6,7]
some_names = ["Tony", "John", "Jack", "Abigail", "Jennifer"]
# I want an array of only ODD numbers from the some_numbers array
new_array = []

# some_numbers.each do |number|
#   if number % 2 != 0
#     new_array << number
#   end
# end

numbers = some_numbers.select do |number|
  number % 2 != 0
end

more_numbers = [2,4,6]

more_numbers = some_numbers.select do |num|
  if num.even?
    more_numbers << num
  end
end

# [1,2,3,4,5,6,7]
doubled_numbers = some_numbers.map do |num|
  if num.even?
    num
  end
end

test1 = some_numbers.select do |num|
  if num.even?
    num * 100
  end
end

test2 = some_numbers.map do |num|
  if num.even?
    num * 1000
  end
end

test3 = some_numbers.find do |num|
  num.even?
end


def random_num
  [1,2,3,4,5,6,7].sample
end

def sushi_multplier(amount)
  if amount > 100
    return "Thats too many sushi, bud! 😠"
  end

  
  "🍣" * amount
end


puts 1
binding.pry
puts 2

