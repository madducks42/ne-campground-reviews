Rails.application.routes.draw do
  root 'homes#index'

  get '/campgrounds', to: 'homes#index'
  get '/campgrounds/new', to: 'homes#authenticated'
  get '/campgrounds/:id/destroy', to: 'homes#authenticated'
  get '/campgrounds/:id/update', to: 'homes#authenticated'
  get '/campgrounds/:id/addimages', to: 'homes#authenticated'
  get '/campgrounds/:id', to: 'homes#index'
  
  devise_for :users

  namespace :api do
    namespace :v1 do
      post 'campgrounds/search', to: 'campgrounds#search'
      
      resources :campgrounds, only: [:index, :show, :create, :edit, :update, :destroy] do
        resources :reviews, only: [:create]
        resources :campground_images, only: [:create, :edit, :update, :destroy]
      end
    end
  end
  
end
