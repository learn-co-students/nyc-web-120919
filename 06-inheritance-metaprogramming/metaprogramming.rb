require 'pry'

class Pet 
  attr_accessor :name, :gender, :breed, :age, :insured, :vaccinated, :life_expectancy
  attr_reader :temperament

  def initialize(pet_hash)
    pet_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end

  def temperament=(temperament)
    if ["chill", "not chill"].include? temperament
      @temperament = temperament
    else
      puts "should be chill or not chill"
    end

  end
end

pet1_hash = {
  name: "Lizzy",
  gender: "F",
  breed: "Iguana",
  age: 5,
  insured: false, # :(
  vaccinated: false,
  temperament: "VERY chill",
  life_expectancy: "100 years"
}

pet1 = Pet.new(pet1_hash)

binding.pry