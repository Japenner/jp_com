Rails.application.routes.draw do
  scope '/api/v1' do
    resources :to_dos
  end
end
