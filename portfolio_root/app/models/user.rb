class User < ApplicationRecord
	has_many :conversations
	has_many :messages, through: :conversations

	def self.authenticate(secure_user_name = '', secure_password = '')
		user = User.find_by_user_name(secure_user_name)
		if user && (user.password == secure_password)
			return user
		else
			return false
		end
	end
end
