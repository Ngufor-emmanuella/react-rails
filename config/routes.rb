Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :greeting, only: [:index]
    end
  end
  root 'greetings#index'
  resources :greetings
  get "/greetings", to: 'greetings#index'
end
