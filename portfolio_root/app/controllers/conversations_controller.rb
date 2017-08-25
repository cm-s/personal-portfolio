class ConversationsController < ApplicationController
	def show

	end

	def new
		@conversation = Conversation.new()
	end
	def create
		@conversation = Conversation.new(conversation_params)
		if @conversation.save!
			puts "CONVERSATION SAVED"
		else
			redirect_to(new_user_conversation_url)
		end
	end

	private

	def conversation_params
		params.require(:conversation).permit(:recipients)
	end
end
