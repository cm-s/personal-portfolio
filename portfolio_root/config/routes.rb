Rails.application.routes.draw do
	# Zentrumregler
	root 'core#index'
	get 'core/extras'
	get 'core/extras/project' => 'core#project'
	get 'core/nutrition_facts'

	# Benutzercontroller
	get 'users/logon' => 'users#logon'
	post 'users/login' => 'users#login'
	resources(:users, :only => [:new, :show, :create, :edit, :destroy]) do
		# Konversationscontroller
		resources(:conversations, :only => [:show, :new, :create, :destroy])
	end

	#                Prefix Verb   URI Pattern                                 Controller#Action
	#                  root GET    /                                           core#index
	#           core_extras GET    /core/extras(.:format)                      core#extras
	#   core_extras_project GET    /core/extras/project(.:format)              core#project
	#  core_nutrition_facts GET    /core/nutrition_facts(.:format)             core#nutrition_facts
	#           users_logon GET    /users/logon(.:format)                      users#logon
	#           users_login POST   /users/login(.:format)                      users#login
	#    user_conversations POST   /users/:user_id/conversations(.:format)     conversations#create
	# new_user_conversation GET    /users/:user_id/conversations/new(.:format) conversations#new
	#     user_conversation GET    /users/:user_id/conversations/:id(.:format) conversations#show
	#                       DELETE /users/:user_id/conversations/:id(.:format) conversations#destroy
	#                 users POST   /users(.:format)                            users#create
	#              new_user GET    /users/new(.:format)                        users#new
	#             edit_user GET    /users/:id/edit(.:format)                   users#edit
	#                  user GET    /users/:id(.:format)                        users#show
	#                       DELETE /users/:id(.:format)                        users#destroy

	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
