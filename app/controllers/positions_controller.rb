class PositionsController < ApplicationController

  def create
    @user = User.find(params[:user_id])
    @position = @user.positions.build(params[:position])
    @position.save
    redirect_to edit_user_registration_path
  end

  def destroy
    @user = User.find(params[:user_id])
    @position = @user.positions.find(params[:id])
    @position.destroy
    redirect_to edit_user_registration_path
  end

end
