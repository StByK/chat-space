Rails.application.routes.draw do
  root to: 'message#index'
  resources :message, only: :index do
  end
end
