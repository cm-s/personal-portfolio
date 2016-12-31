class CoreController < ApplicationController
  before_action :authenticate_login, :only => [:desktop, :setting]
  before_action :enforce_logged_state, :only => [:new, :create, :login]

  def index
    @page = 'index'
  end
  def projects
    @page = 'projects'
  end
  def nutrition_facts
    @page = 'nutrition_facts'
  end
  def getmessenger
    @page = 'messenger ad'
    enforce_logged_state
  end
end
