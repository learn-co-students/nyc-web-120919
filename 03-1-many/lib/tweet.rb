class Tweet
  attr_reader :content, :date_posted, :user

  @@all = []

  def initialize(content, user)
    @content = content
    @date_posted = Time.now
    @user = user

    @@all << self
  end

  def self.all
    @@all
  end
end