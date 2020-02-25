class Api::V1::StoriesController < ApplicationController
    def index
        @stories = Story.all 
        render json: @stories, status: :ok
    end

    def show
        @story = Story.find(params[:id])
        render json: @story, status: :ok
    end
    #wtf mate?
end
