class CoreController < ApplicationController
	before_action :indemnify_login, :only => [:new, :create, :logon]

	def index
	end

	def extras
	end

	def project
		request = params[:target]
		if request.id
			respond_to do |response|
			data = { div: 'text' }
			response.html { render :html => data }
		end
	end

	def nutrition_facts
	end
end
