class ApplicationController < ActionController::Base
  protect_from_forgery
  http_basic_authenticate_with name: ENV["SITE_USERNAME"], password: ENV["SITE_PASSWORD"]

end
