class User
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def reviews
    Review.all.select do |review|
      review.user == self  
    end
  end

  def movies
    reviews.map { |review| review.movie }
  end

  def self.all
    @@all
  end

  def self.most_reviews_written
    user_with_most_reviews = User.all[0]

    User.all.each do |user|
      if user.reviews.length > user_with_most_reviews.reviews.length
        user_with_most_reviews = user
      end
    end


    # return the user with the most reviews written
    user_with_most_reviews
  end
end