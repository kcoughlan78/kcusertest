class UsersController < ApplicationController
  def edit
    @user = !params[:id].nil? ? User.find(params[:id]) : current_user
  end
end
