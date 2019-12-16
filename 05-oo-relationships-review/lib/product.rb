class Product
  attr_accessor :name, :price
  
  @@all = []

  def initialize(name, price)
    @name = name
    @price = price

    @@all << self
  end

end