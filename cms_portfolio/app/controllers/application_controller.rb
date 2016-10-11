class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def authenticate_login
    if session[:logged_user_id] # If a session logged_user_id exists and isn't nil (nil being logged out);
      # find the user by the id they logged in with ˥
      @current_user = User.find session[:logged_user_id]
      return true
    else
      redirect_to('/messenger/desktop')
      return false
    end
  end
  def enforce_logged_state
    if session[:logged_user_id] # Prohibit the user from logging in, if already logged in
      @page = 'messenger'
      redirect_to("/mm_users/#{session[:logged_user_id]}")
      return false
    else
      return true
    end
  end
  def determine_disabled
    @disabled = true
    if !session[:logged_user_id]
      @disabled = false
    end
    puts "ApplicationController: \'Disabled\' environment variable set to #{@disabled}"
  end
end
