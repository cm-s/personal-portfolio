class MessengerController < ApplicationController
    def show
        render :desktop
    end
    def new
        @user = Messenger.new
    end
    def create
        @user = Messenger.new(user_params)

        if @user.save
            render js: 'alert("User successfully sreated!"); var home = confirm("Go Home?");
            if (home) {window.location.href = "core/index"};'
        else
            render html: '<h1>Failed</h1>'
        end
    end
    private
    def user_params
        params.require(:messenger).permit(:user_name, :password, :display_name)
    end
end
