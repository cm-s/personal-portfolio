Rails.application.routes.draw do
  # Core Controller
  root 'core#index' # This is represented with 'root_url' in the controller.rb file
  get 'core/projects'
  get 'core/nutrition_facts'
  get 'core/getmessenger'

  # Messenger Controller
  get 'messenger/logout' => 'messenger#logout'
  get 'messenger/logon' => 'messenger#logon' # need seperate for POST action
  post 'messenger' => 'messenger#login'
  resources( :messenger, :only => [:create, :new, :show, :destroy] )
  # Message Controller
  resources( :message, :only => [:create, :new, :destroy, :index] )
  # The ':only => []' option only supplies routes resources specified in the given array
  # -------------------- After 'rake routes' -----------------------------------
  #               Prefix Verb   URI Pattern                     Controller#Action
  #                 root GET    /                               core#index
  #        core_projects GET    /core/projects(.:format)        core#projects
  # core_nutrition_facts GET    /core/nutrition_facts(.:format) core#nutrition_facts
  #    core_getmessenger GET    /core/getmessenger(.:format)    core#getmessenger
  #     messenger_logout GET    /messenger/logout(.:format)     messenger#logout
  #      messenger_login POST   /messenger/login(.:format)      messenger#login
  #      messenger_index POST   /messenger(.:format)            messenger#create
  #        new_messenger GET    /messenger/new(.:format)        messenger#new
  #            messenger GET    /messenger/:id(.:format)        messenger#show
  #                      DELETE /messenger/:id(.:format)        messenger#destroy
  #        message_index GET    /message(.:format)              message#index
  #                      POST   /message(.:format)              message#create
  #          new_message GET    /message/new(.:format)          message#new
  #              message DELETE /message/:id(.:format)          message#destroy

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
