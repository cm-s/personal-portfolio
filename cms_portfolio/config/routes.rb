Rails.application.routes.draw do
  # Core Controller
  root 'core#index' # This is represented with 'root_url' in the controller.rb file
  get 'core/projects'
  get 'core/nutrition_facts'
  get 'core/getmessenger'

  # Messenger Controller
  get 'mm_users/logout' => 'mm_users#logout'
  get 'mm_users/logon' => 'mm_users#logon'
  post 'mm_users/login' => 'mm_users#login'
  post 'mm_users' => 'mm_users#create'
  resources( :mm_users, :only => [:new, :show, :destroy] ) do
    get '/search' => 'mm_users#search'
  end
  # -------------------- After 'rake routes' -----------------------------------
  #               Prefix Verb   URI Pattern                            Controller#Action
  #                 root GET    /                                      core#index
  #        core_projects GET    /core/projects(.:format)               core#projects
  # core_nutrition_facts GET    /core/nutrition_facts(.:format)        core#nutrition_facts
  #    core_getmessenger GET    /core/getmessenger(.:format)           core#getmessenger
  #      mm_users_logout GET    /mm_users/logout(.:format)             mm_users#logout
  #       mm_users_logon GET    /mm_users/logon(.:format)              mm_users#logon
  #       mm_users_login POST   /mm_users/login(.:format)              mm_users#login
  #             mm_users POST   /mm_users(.:format)                    mm_users#create
  #       mm_user_search GET    /mm_users/:mm_user_id/search(.:format) mm_users#search
  #          new_mm_user GET    /mm_users/new(.:format)                mm_users#new
  #              mm_user GET    /mm_users/:id(.:format)                mm_users#show
  #                      DELETE /mm_users/:id(.:format)                mm_users#destroy

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
