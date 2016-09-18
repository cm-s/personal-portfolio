class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :recipiant, class_name: 'user'
end
