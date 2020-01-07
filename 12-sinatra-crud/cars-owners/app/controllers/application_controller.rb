require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end
  
  # Index Action: Convention for our index action is for our route/path to be "/cars"
  get "/cars" do
   @cars = Car.all
    erb :cars 
  end
  
  # New Action: Read that responds with a New Form
  get "/cars/new" do
    erb :new 
  end

  # Show Action: Specificies in the route what attribute we want to use to find a specific instance
  get "/cars/:id" do
    @car = Car.find(params[:id])
    erb :show
  end

  # Create Action: POST that creates a new instance
  post "/cars" do
    @car = Car.create(params)
    redirect "/cars/#{@car.id}"
  end

  # Edit Action: Read that responds with an Edit Form for a specific instance
  get "/cars/edit/:id" do
    @car = Car.find(params[:id])
    erb :edit
  end
  # Update Action: PATCH that updates instance in our DB
  patch "/cars/:id" do
    binding.pry
    @car = Car.find(params[:id])
    @car.update(name: params[:name])
    redirect "/cars/#{@car.id}"
  end

  # Delete Action: Delete's specific instance
  delete "/cars/:id" do
    @car = Car.find(params[:id])
    @car.destroy 
    redirect "/cars"
  end

end
