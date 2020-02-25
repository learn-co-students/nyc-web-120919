class Api::V1::UserMemesController < ApplicationController
    def index
        @usermemes = User.all    
        render json: @usermemes, status: :ok
    end

    def show
        @usermeme = User.find(params[:id])
        render json:@usermeme, status: :ok
    end
end
