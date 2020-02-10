class Person
  attr_accessor :name
  
  def initialize(name)
    @name = name
  end

  def say_name
    puts "My name is #{self.name}"
  end

  def self.say_something
    puts "I am a class method defined on the #{self} class."
  end
end

Person.say_something # => self will be Person class
# self in ruby is the receiver of a method

andy = Person.new('andy')
andy.say_name # => self will be the instance
# andy (instance) is receiving the method call