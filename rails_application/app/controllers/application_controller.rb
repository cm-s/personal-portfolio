class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception

	def read_uri(section)
		uri = request.original_url
		uri.gsub!(/http:\W\W|https:\W\W/i, "")
		uri = uri.split(/\//i)
		return uri[section]
	end

	def indemnify_login
		if session[:permitted_uid] # Prohibit the user from logging in, if already logged in
			puts 'MessengerController: User login session detected; redirecting to desktop'
			redirect_to("/mm_users/#{session[:permitted_uid]}")
			return false
		else
			puts 'MessengerController: No user session id found; rendering view'
			return true
		end
	end
end
