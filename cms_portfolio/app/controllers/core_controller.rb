class CoreController < ApplicationController
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
  end
end
