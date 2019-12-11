require 'pry'

class Person
  attr_reader :hygiene
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @hygiene = 0

    @@all << self
  end

  def hygiene=(hygiene)
    if hygiene >= 10
      @hygiene = 10
    elsif (hygiene < 0)
      @hygiene = 0
    else
      @hygiene = hygiene
    end
  end

  def take_bath
    # print some weird text
    # increase hygiene by 4
    puts "some text"
    self.hygiene = @hygiene + 4
  end

  def self.all
    @@all
  end

end

tony = Person.new "Tony"



binding.pry