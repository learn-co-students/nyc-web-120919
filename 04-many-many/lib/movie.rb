class Movie
  attr_reader :title, :release_year

  @@all = []

  def initialize(title, release_year)
    @title = title
    @release_year = release_year

    @@all << self
  end

  def reviews
    Review.all.select do |review|
      review.movie == self
    end
  end

  def users
    reviews.map { |review| review.user }
  end

  def average_rating
    # add up all the review ratings FOR THIS MOVIE
    # divide by the amount of reviews FOR THIS MOVIE
    total = 0
    reviews.each do |review|
      total += review.rating
    end

    total / reviews.length
  end


  def self.all
    @@all
  end

end