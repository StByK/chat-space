Rails.application.routes.draw do
  get 'user/edit'

  devise_for :users
  root to: 'message#index'
  resources :message, only: :index do
  end
  resources :user, only: [:edit, :update] do
  end
end
