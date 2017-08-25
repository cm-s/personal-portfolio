class UsersController < ApplicationController
	# Erzwingen ApplicationController-Aktionen auf Benutzer
	before_action :indemnify_login, :only => [:new, :create, :logon]

	def logon
		@user = User.new()
	end
	def login
		@permissible = User.authenticate(params[:user_name], params[:password])
		if @permissible # Wenn die Authentifizierung jedes Objekt zurückgibt
			session[:permitted_uid] = @permissible.id
			puts "MessengerController: Success; User logged in successfully"
			redirect_to(user_conversations_url({ id: @permissible }))
		else
			puts "MessengerController: Failure; Invalid credentials, user redirected"
			flash[:error] = "Invalid credentials. Couldn\'t login."
			redirect_to(users_logon_url)
		end
	end
	def logout
		reset_session
		puts "MessengerController: Logout Performed; Redirecting to root"
		flash[:notice] = "Logout Succeded"
		redirect_to(root_url)
	end

	def new
		@user = User.new()
	end
	def create
		@user = User.new(signup_params)
		if @user.save!
			puts "MessengerController: Notice; User successfully persisted to database"
			session[:permitted_uid] = @user.id
			flash[:notice] = "User creation successful! Welcome to Material Messenger."
			redirect_to(user_url({ id: @user }))
		else
			puts "MessengerController: Notice; User creation was just denied at #{Time.new}"
			flash[:error] = "There was an error. Ensure that your entries match the desired criteria."
			redirect_to(new_user_url)
		end
	end

	def show
		@user = User.find_by(id: read_uri(2))
	end

	private

	def endorse(input)
		filtered = input.scan(/\{|\}|\(|\)|\&|\$|#|\[|\]|\*|\^|\:|\;/i)
		if filtered.length
			return false
		end
		return true
	end

	def db_scan(query)
		results = []
		User.all.each do |usr|
			if usr.first_name.scan(/#{query}/i).length > 0
				sanitized = usr.attributes
				sanitized.compact!
				sanitized.except!('user_name', 'password', 'created_at')
				results.push(sanitized)
			end
		end
		return results.to_json
	end

	def signup_params
		params.require(:user).permit(:user_name, :password, :first_name, :last_name)
		# Denken Sie daran, das Bild von Paperclip hinzuzufügen
	end

	def login_params
		params.require(:user).permit(:user_name, :password)
	end
end
