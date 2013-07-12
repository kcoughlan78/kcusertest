class AddPhoneNoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :phoneNo, :string
  end
end
