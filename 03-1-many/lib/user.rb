class User
  # inititalize 
    # with a username
    # bio optional and updatable
    # date_joined is the time of initialization
  attr_reader :username, :date_joined, :tweets
  attr_accessor :bio

  @@all = []

  def initialize(username, bio = '')
    @username = username
    @bio = bio

    @date_joined = Time.now

    @@all << self
  end

  def tweets
    # look through all the tweets
    Tweet.all.select do |tweet|
      # only select the tweet where the user is the user that called this method
      tweet.user == self
    end
  end

  def create_tweet(tweet_content)
    Tweet.new(tweet_content, self)
  end

  def character_count
    # look at all of MY tweet
    # count the string length of the tweet content
    # add'em all up
    # return the total

    total = 0
    tweets.each do |tweet|
      total += tweet.content.length 
    end
    total
  end

  def self.all
    @@all
  end
end