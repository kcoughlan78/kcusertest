class ApplicationController < ActionController::Base
  protect_from_forgery

  def biz_common
    if current_user and (current_user.usertype != "Jobhunter")
      return true
    end
  end

  helper_method :biz_common


end
