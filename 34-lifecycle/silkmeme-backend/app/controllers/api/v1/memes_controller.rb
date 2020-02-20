class Api::V1::MemesController < ApplicationController

    def index
        @memes = Meme.all    
        render json: @memes, status: :ok
        # render json: MemeSerializer.new(@memes), status: :ok
    end

    def show
        @meme = Meme.find(params[:id])
        render json: @meme, status: :ok
        # render json: MemeSerializer.new(@meme), status: :ok
    
    end

end
