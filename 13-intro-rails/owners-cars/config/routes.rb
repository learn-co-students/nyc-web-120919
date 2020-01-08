Rails.application.routes.draw do
  # resources :cars
  get '/cars', to: "cars#index"
  get '/cars/new', to: "cars#new"
  get '/cars/:id', to: "cars#show"
  post '/cars', to: "cars#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
