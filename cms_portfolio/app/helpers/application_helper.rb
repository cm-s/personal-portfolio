module ApplicationHelper
  def render_title # Taken from http://goo.gl/BZKrzZ
    return @title if defined?(@title)
    "Charles Stevens, Portfolio"
  end
end
