require 'pry'

class Pet
  attr_reader :name, :gender, :breed, :age

  def initialize(name, gender, breed, age)
    @name = name
    @gender = gender
    @breed = breed
    @age = age
  end

  # def vocalization
  #   puts "#{name} says:"
  # end

end

class Dog < Pet
  attr_reader :alpha
  def initialize(name, gender, breed, age, alpha)
    super(name, gender, breed, age)
    @alpha = alpha
  end

  def vocalization
    super
    "bark! woof!"
  end
end

class Cat < Pet
  attr_reader :use_litter_box

  def initialize(name, gender, breed, age, use_litter_box)
    super(name, gender, breed, age)
    @use_litter_box = use_litter_box
  end

  def vocalization
    ["meow", "hsssssss", "purrrr"].sample
  end
end

dog1 = Dog.new("Snoopy", "male", "beagle", 69, false)
cat1 = Cat.new("Garfield", "male", "tabby", 40, false)

binding.pry
