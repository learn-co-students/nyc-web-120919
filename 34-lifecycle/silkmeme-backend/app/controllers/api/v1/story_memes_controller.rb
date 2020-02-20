class Api::V1::StoryMemesController < ApplicationController
    def index
        @storymemes = StoryMeme.all    
        render json: @storymemes, status: :ok
        # render json: StoryMemeSerializer.new(@usermemes), status: :ok
    end

    def show
        @storymeme = StoryMeme.find(params[:id])
        render json:@storymeme, status: :ok
        # render json: StoryMemeSerializer.new(@usermeme), status: :ok
    end
end
