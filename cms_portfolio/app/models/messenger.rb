class Messenger < ActiveRecord::Base
    validates :user_name, :presence => true, :uniqueness => { :case_sesitive => true, :message => "That Username is taken."}, :length => { :in => 1..25 }
    validates :password, :presence => true, :length => { :in => 1..15 }

    def self.authenticate(secure_user_name = '', secure_password = '')
        user = Messenger.find_by_user_name(secure_user_name)

        if user && (user.password == secure_password)
            return user
        else
            return false
        end
    end
end
