class CoreController < ApplicationController
  before_filter :authenticate_login, :only => [:desktop, :setting]
  before_filter :enforce_logged_state, :only => [:new, :create, :login]
  before_filter :determine_disabled

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
