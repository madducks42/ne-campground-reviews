Rails.application.routes.draw do
  root 'homes#index'

  get '/campgrounds', to: "homes#index"
  get '/campgrounds/:id', to: "homes#index"
  
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :campgrounds, only: [:index, :show]
    end
  end
end
