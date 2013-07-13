class ApplicationController < ActionController::Base
  protect_from_forgery

  def bizCommon
    if current_user and (current_user.usertype != "Jobhunter")
      return true
    end
  end


end
