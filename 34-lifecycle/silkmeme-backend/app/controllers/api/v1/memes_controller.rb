class Api::V1::MemesController < ApplicationController

    def index
        @memes = Meme.all    
        render json: @memes, status: :ok
    end

    def show
        @meme = Meme.find(params[:id])
        render json: @meme, status: :ok    
    end

end
