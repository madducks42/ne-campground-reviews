Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, :path_prefix => 'd'

  get '/campgrounds', to: 'homes#index'
  get '/campgrounds/new', to: 'homes#authenticated'
  get '/campgrounds/:id/destroy', to: 'homes#authenticated'
  get '/campgrounds/:id/update', to: 'homes#authenticated'
  get '/campgrounds/:id/images', to: 'homes#authenticated'
  get '/campgrounds/:id', to: 'homes#index'

  get '/users/:id', to: "homes#authenticated"
  get '/users/:id/admin', to: "homes#authenticated"
  get '/users/:id/admin/edit', to: "homes#authenticated"
  get '/users/:id/admin/delete', to: "homes#authenticated"

  get '/aboutus', to: "homes#index"
  get '/camper', to: "homes#index"
  
  resources :users

  namespace :api do
    namespace :v1 do
      post 'campgrounds/search', to: 'campgrounds#search'
      post 'campgrounds/filter', to: 'campgrounds#filter'
      post 'users/favorite', to: 'users#favorite'
      
      # get 'users/admin_view' to: 'users#admin_view'
      
      resources :users, only: [:index, :show, :edit, :update, :destroy]
      # resources :campground_images, only: [:index]

      resources :campgrounds, only: [:index, :show, :create, :edit, :update, :destroy] do
        resources :campground_images, only: [ :create]
        resources :reviews, only: [:show, :create, :update, :destroy]
      end
    end
  end
  
  # get '*page', to: 'homes#index'
end
