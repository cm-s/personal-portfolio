class ConversationChannel < ApplicationCable::Channel
  def subscribed
    # Stream the 'message' broadcast from the send method
    # identified by 'conversation_channel'
    stream_from "conversation_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send(data) # receiving the object from app/assets/javascripts/channels/conversation.js - send()
    ActionCable.server.broadcast(data['message'])
  end
end
