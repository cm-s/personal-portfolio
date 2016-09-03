class MessengerController < ApplicationController
    # apply ApplicationController actions to logged users
    before_filter :authenticate_login, :only => [:desktop, :setting]
    before_filter :enforce_logged_state, :only => [:new, :create, :login]

    def index
    end
    def show
        @title = "Material Messenger"
        @users = Messenger.all.order('created_at ASC') # ordering messages from least current to most
        render :desktop
    end
    def new
        @user = Messenger.new
    end
    def create
        @users = Messenger.all.order('created_at ASC')
        @user = Messenger.new(user_params)
        @user.save!
        if @user.save!
            puts "ApplicationController::MessengerController: Database entry creation successful"
            session[:logged_user_id] = @user.id
            render :desktop
        else
            puts "ApplicationController::MessengerController: Database entry creation unsuccessful"
            render :desktop, :notice => "Signup Failed"
        end
    end
    def login
        user_logged = Messenger.authenticate(params[:user_name], params[:password])

        if user_logged # If authentication returns, being anything other than false (an object)
            session[:logged_user_id] = user_logged.id
            puts "ApplicationController::MessengerController: Success; User logged in sucessfully"
            render :desktop
        else
            puts "ApplicationController::MessengerController: Failure; Invalid Credentials, User redirected"
            render :desktop
        end
    end
    def logout
        session[:logged_user_id] = nil
        puts "ApplicationController::MessengerController: Logout Succeded. Redirecting to root"
        redirect_to root_url
    end
    def logged_in
        if @current_user.id
            return true
        else
            return false
        end
    end
    private
    def user_params
        params.require(:messenger).permit(:user_name, :password, :first_name, :last_name)
    end
end
