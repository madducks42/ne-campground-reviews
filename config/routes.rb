Rails.application.routes.draw do
  root 'homes#index'

  get '/campgrounds', to: 'homes#index'
  get '/campgrounds/:id', to: 'homes#index'
  get '/campgrounds/new', to: 'homes#index'
  
  devise_for :users

  namespace :api do
    namespace :v1 do
      post 'campgrounds/search', to: 'campgrounds#search'

      resources :campgrounds, only: [:index, :show, :create] do
        resources :reviews, only: [:create]
      end
    end
  end
  
end
