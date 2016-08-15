class MessengerController < ApplicationController
    # apply ApplicationController actions to logged users
    before_filter :authenticate_login, :only => [:desktop, :setting]
    before_filter :enforce_logged_state, :only => [:new, :create, :login]

    def show
        @title = "Material Messenger"
        render :desktop
    end
    def new
        @user = Messenger.new
    end
    def create
        @user = Messenger.new(user_params)
        @user.save!
        if @user.save!
            render :desktop, :notice => "Signup Successful!"
        else
            render :desktop, :notice => "Signup Failed"
        end
    end
    def login
        user_logged = Messenger.authenticate(params[:user_name], params[:password])

        if user_logged # If authentication returns, being anything other than false (an object)
            session[:logged_user_id] = user_logged.id
            render :desktop
            puts "ApplicationController::MessengerController: Success; User logged in sucessfully"
        else
            render :desktop
            puts "ApplicationController::MessengerController: Failure; Invalid Credentials, User redirected"
        end
    end
    def logout
        session[:logged_user_id] = nil
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
        params.require(:messenger).permit(:user_name, :password, :display_name)
    end
end
