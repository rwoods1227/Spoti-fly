Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:create, :show, :index, :update, :destroy]
    resources :songs, only: [:show, :index]
  end
  root "static_pages#root"
end
