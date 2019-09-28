Rails.application.routes.draw do
  get 'user/edit'

  devise_for :users
  root to: 'message#index'
  resources :rooms, only: [:new, :create, :edit, :update] do
    resources :message, only: [:index, :create]
  end
  resources :user, only: [:edit, :update] do
  end
end
