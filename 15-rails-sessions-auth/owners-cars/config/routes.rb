Rails.application.routes.draw do

  # resources :cars
  get '/cars', to: "cars#index", as: "cars" # cars_path => "/cars"
  get '/cars/new', to: "cars#new" 
  get '/cars/:id', to: "cars#show", as: "car"
  post '/cars', to: "cars#create"
  get '/cars/:id/edit', to: "cars#edit", as: "edit_car"
  patch '/cars/:id', to: "cars#update"
  get '/cars/all_red', to: "cars#all_red"

  #User Routes 
  get '/users', to: "users#index", as: "users"
  get '/signup', to: "users#new", as: "new_user"
  get '/users/:id', to: "users#show", as: "user"
  post '/users', to: "users#create"
  get '/users/:id/edit', to: "users#edit"
  patch '/users/:id', to: "users#update"
  delete '/users/:id', to: "users#delete"

  #Sessions Routes
  get '/login', to: "sessions#new", as: "sessions"
  post '/login', to: "sessions#create"
  get '/logout', to: "sessions#destroy"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
