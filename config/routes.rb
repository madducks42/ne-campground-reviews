Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/campgrounds', to: 'homes#index'
  get '/campgrounds/new', to: 'homes#authenticated'
  get '/campgrounds/:id/destroy', to: 'homes#authenticated'
  get '/campgrounds/:id/update', to: 'homes#authenticated'
  get '/campgrounds/:id/addimages', to: 'homes#authenticated'
  get '/campgrounds/:id', to: 'homes#index'
  get '/users/:id', to: "homes#authenticated"
  
  resources :users

  namespace :api do
    namespace :v1 do
      post 'campgrounds/search', to: 'campgrounds#search'
      post 'campgrounds/filter', to: 'campgrounds#filter'
      post 'users/favorite', to: 'users#favorite'
      
      resources :users, only: [:show, :destroy]
      resources :campgrounds, only: [:index, :show, :create, :edit, :update, :destroy] do
        resources :reviews, only: [:create]
        resources :campground_images, only: [:create, :edit, :update, :destroy]
        
        resources :reviews, only: [:show, :create, :update, :destroy]
      end
    end
  end
  
  get '*page', to: 'homes#index'
end
