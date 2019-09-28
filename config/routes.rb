Rails.application.routes.draw do
  devise_for :users
  root to: 'message#index'
  resources :message, only: :index do
  end
end
