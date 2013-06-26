class HomeController < ApplicationController
  http_basic_authenticate_with name: ENV["SITE_USERNAME"], password: ENV["SITE_PASSWORD"]
  def index
  end
end
