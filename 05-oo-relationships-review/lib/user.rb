class User
  # attr_reader :name
  attr_accessor :email

  @@all = []

  def initialize(name, email)
    @name = name
    @email = email

    @@all << self
  end

  def wish_list
    # * `user#wishlist` - returns an array of products that the user has wish listed
    # get all this user's wish list items
    # get products from the wishlist items
    # return an array of said products

    my_wishlist_items = WishListItem.all.select do |item|
      self == item.user
    end
  end

  def self.all
    @@all
  end
end