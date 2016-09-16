Rails.application.routes.draw do
  # Core Controller
  root 'core#index' # This is represented with 'root_url' in the controller.rb file
  get 'core/projects'
  get 'core/nutrition_facts'

  # Messenger Controller
  get 'messenger/logout' => 'messenger#logout'
  post 'messenger/login' => 'messenger#login'
  resources( :messenger, :only => [:create, :new, :show, :destroy, :index] )
  # The ':only => []' option removes the listed default actions that are included with 'resources :resource'
  # ------------ After 'rake routes' -----------------------------------
  #               Prefix Verb   URI Pattern                     Controller#Action
  #                 root GET    /                               core#index
  #        core_projects GET    /core/projects(.:format)        core#projects
  # core_nutrition_facts GET    /core/nutrition_facts(.:format) core#nutrition_facts
  #          user_logout GET    /user/logout(.:format)          user#logout
  #           user_login POST   /user/login(.:format)           user#login
  #           user_index GET    /user(.:format)                 user#index
  #                      POST   /user(.:format)                 user#create
  #             new_user GET    /user/new(.:format)             user#new
  #                 user GET    /user/:id(.:format)             user#show
  #                      DELETE /user/:id(.:format)             user#destroy

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

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
