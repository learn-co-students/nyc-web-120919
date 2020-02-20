class Api::V1::SubredditsController < ApplicationController
    def index
        @subreddits = Subreddit.all 
        render json: @subreddits, status: :ok
        # render json: SubredditSerializer.new(@subreddits), status: :ok
    end

    def show
        @subreddit = Subreddit.find(params[:id])
        render json: @subreddit, status: :ok
        # render json: SubredditSerializer.new(@subreddit), status: :ok
    end
end
