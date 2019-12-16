class WishListItem
  attr_reader :user
  
  @@all = []
  
  def initialize(user, product)
    @user = user
    @product = product

    @@all << self
  end

  def self.all
    @@all
  end
end