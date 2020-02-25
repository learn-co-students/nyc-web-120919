class Api::V1::StoryMemesController < ApplicationController
    def index
        @storymemes = StoryMeme.all    
        render json: @storymemes, status: :ok
    end

    def show
        @storymeme = StoryMeme.find(params[:id])
        render json:@storymeme, status: :ok
    end
end
