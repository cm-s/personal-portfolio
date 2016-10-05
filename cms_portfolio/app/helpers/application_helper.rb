module ApplicationHelper
  def render_title # Taken from http://goo.gl/BZKrzZ
    return @title if defined?(@title)
    "Charles Stevens, Portfolio"
  end
  def determine_page
    return @page if defined?(@page)
    'index'
  end
  def read_uri(parameter)
    require 'uri'
    @raw_uri = URI.parse(request.original_fullpath)
    @uri_params_raw = @raw_uri.query
    if @uri_params_raw =~ /\=/
      @uri_vars = @uri_params_raw.split('=')
      return @uri_vars[parameter]
    end
    return false
  end
end
