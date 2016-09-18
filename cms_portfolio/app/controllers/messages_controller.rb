class MessagesController < ApplicationController

  def index

  end

  def new
    @message = Message.new
  end
  def create
    @message = Message.new(message_params)
    @message.save!
    list_messages if @message.save!
    render(:partial => 'index')
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
  def list_messages
    @messages = Message.all.order('created_at DESC') # ordering all messages from the most to least current
  end
end
