class OwnersController < ApplicationController
  def index
    @owners = Owner.all
  end

  def show
    @owner = Owner.find(params[:id])
  end

  def new
    @owner = Owner.new
  end

  def create
  byebug
  end

  def edit
    @owner = Owner.find(params[:id])
  end
  def update 
    byebug
  end
end
