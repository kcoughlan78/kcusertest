class UsersController < ApplicationController
  def index
    @users = User.order("username")
  end

  def show
    @user = !params[:username].nil? ? User.find(params[:username]) : current_user
  end
end
