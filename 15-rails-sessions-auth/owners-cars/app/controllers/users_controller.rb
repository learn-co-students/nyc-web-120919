class UsersController < ApplicationController
  before_action :authorized, except: [:new, :create]
  
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    redirect_to "/users/#{user.id}"
  end

  def edit
    @user = User.find(params[:id])
  end
  def update 
    byebug
  end

  private

  def user_params 
    params.require(:user).permit(:username, :password)
  end
end
