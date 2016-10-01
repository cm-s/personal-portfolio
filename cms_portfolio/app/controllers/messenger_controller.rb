class MessengerController < ApplicationController
  # apply ApplicationController actions to logged users
  before_filter :authenticate_login, :only => [:desktop, :setting]
  before_filter :enforce_logged_state, :only => [:new, :create, :login]
  before_filter :determine_disabled

  def show
    @title = "Material Messenger"
    @page = "messenger"
    @users = User.all.order('created_at ASC') # ordering users from least current to most
    render(:index)
  end
  def new
    @page = "new messenger"
    @user = User.new
  end
  def create
    @user = User.new(user_params)
    if @user.save!
      puts "ApplicationController::MessengerController: Database entry creation successful"
      session[:logged_user_id] = @user.id
      flash[:postprocess] = "User Created Successfully"
      @page = "messenger"
      render(:show)
    else
      puts "ApplicationController::MessengerController: Database entry creation unsuccessful"
      flash[:user_error] = "...Something Went Wrong"
      render(:new)
    end
  end

  def logon
      @page = "login messenger"
      render(:login)
  end
  def login
    logged_user = User.authenticate(params[:user_name], params[:password])

    if logged_user # If authentication returns, being anything other than false (an object)
      session[:logged_user_id] = logged_user.id
      puts "ApplicationController::MessengerController: Success; User logged in sucessfully"
      flash[:pastprocess] = "Logged In Successfully"
      determine_disabled
      @page = "messenger"
      render(:show)
    else
      puts "ApplicationController::MessengerController: Failure; Invalid Credentials, User redirected"
      flash[:user_error] = "Couldn\'t Log In"
      determine_disabled
      render(:login)
    end
  end
  def logout
    reset_session
    puts "ApplicationController::MessengerController: Logout Succeded. Redirecting to root"
    flash[:postprocess] = "Logout Succeded"
    redirect_to(root_url)
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password, :first_name, :last_name)
  end
end
