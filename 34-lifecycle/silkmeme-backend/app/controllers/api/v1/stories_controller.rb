class Api::V1::StoriesController < ApplicationController
    def index
        @stories = Story.all 
        render json: @stories, status: :ok
        # render json: StorySerializer.new(@stories), status: :ok
    end

    def show
        @story = Story.find(params[:id])
        render json: @story, status: :ok
        # render json: StorySerializer.new(@story), status: :ok
    end
end
