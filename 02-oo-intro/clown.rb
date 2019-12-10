class Clown
  attr_accessor :name, :age
  attr_reader :skill
  attr_writer :fear

  @@all = []

  def initialize(name, age, skill, fear)
    @name = name
    @age = age
    @skill = skill
    @fear = fear

    @@all << self
  end

  def introduce
    "Hello, my name is #{name}, and I do: #{fear}"
  end


  def self.all
    @@all
  end

  def self.find_by_name(name)
    # look through all the clowns
    # compare the name

    @@all.find do |clown|
      clown.name == name
    end
  end

  def self.clown_skills
    @@all.map do |clown|
      clown.skill
    end
  end
end