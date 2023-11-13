Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :notes

      get 'test' => "notes#test"
      get 'build' => "notes#build"
      get 'feeds' => "notes#feeds"

      namespace :rss do
        resources :feeds
      end
    end
  end
end
