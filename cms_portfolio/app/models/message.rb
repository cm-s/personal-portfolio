class Message < ApplicationRecord
  has_one :user
  def show
    @messages = Message.all
  end
end
