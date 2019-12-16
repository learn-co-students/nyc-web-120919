require 'pry'

require_relative './lib/user'
require_relative './lib/product'
require_relative './lib/wish_list_item'

user_1 = User.new('steven', 'steven@email.com')
user_2 = User.new('bill', 'bill@email.com')
user_3 = User.new('layla', 'layla@email.com')

product_1 = Product.new('IG Joe', 4.99)
product_2 = Product.new('FB Sally', 6.99)
product_3 = Product.new('SC Kelly', 5.99)

wli_1 = WishListItem.new(user_1, product_1)
wli_1 = WishListItem.new(user_1, product_2)

wl_1 = user_1.wish_list

binding.pry
puts 'kthxbye'
