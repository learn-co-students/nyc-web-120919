class Api::V1::SubredditsController < ApplicationController
    def index
        @subreddits = Subreddit.all 
        render json: @subreddits, status: :ok
    end

    def show
        @subreddit = Subreddit.find(params[:id])
        @memes = Meme.where(subreddit: @subreddit)

        render json: {subreddit: @subreddit, memes: @memes}, status: :ok
    end
end
