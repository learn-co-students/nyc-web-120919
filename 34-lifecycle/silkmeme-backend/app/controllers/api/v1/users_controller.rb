class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all    
        render json: @users, status: :ok
        # render json: UserSerializer.new(@users), status: :ok
    end

    def show
        @user = User.find(params[:id])
        render json:@user, status: :ok
        # render json: UserSerializer.new(@user), status: :ok
    end
end
