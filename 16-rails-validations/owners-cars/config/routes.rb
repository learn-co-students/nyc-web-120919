Rails.application.routes.draw do
  # resources :cars
  get '/cars', to: "cars#index", as: "cars" # cars_path => "/cars"
  get '/cars/new', to: "cars#new", as: "new_car"
  get '/cars/:id', to: "cars#show", as: "car"
  post '/cars', to: "cars#create"
  get '/cars/:id/edit', to: "cars#edit", as: "edit_car"
  patch '/cars/:id', to: "cars#update"
  get '/cars/all_red', to: "cars#all_red"

  #Owner Routes 
  get '/owners', to: "owners#index", as: "owners"
  get '/owners/new', to: "owners#new", as: "new_owner"
  get '/owners/:id', to: "owners#show", as: "owner"
  post '/owners', to: "owners#create"
  get '/owners/:id/edit', to: "owners#edit"
  patch '/owners/:id', to: "owners#update"
  delete '/owners/:id', to: "owners#delete"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
