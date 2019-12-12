class Review
  attr_reader :user, :movie, :rating
  attr_accessor :content

  @@all = []

  def initialize(user, movie, rating, content='')
    @user = user       # belongs to user
    @movie = movie     # belongs to movie
    @content = content
    self.rating = rating.to_f

    @@all << self
  end

  def rating=(rating)
    if rating >=5
      @rating = 5
    elsif rating <= 0
      @rating = 0
    else
      @rating = rating
    end
  end

  def self.all
    @@all
  end
end