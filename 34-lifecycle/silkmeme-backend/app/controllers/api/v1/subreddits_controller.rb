class Api::V1::SubredditsController < ApplicationController
    def index
        @subreddits = Subreddit.all 
        render json: @subreddits, status: :ok
    end

    def show
        @subreddit = Subreddit.find(params[:id])
        render json: @subreddit, status: :ok
    end
end
