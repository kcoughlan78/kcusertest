class UsersController < ApplicationController
  def index
    @users = User.order("username")
  end

  def show
    @user = !params[:email].nil? ? User.find(params[:email]) : current_user
  end
end
