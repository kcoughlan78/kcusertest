class AddContactPersonToUsers < ActiveRecord::Migration
  def change
    add_column :users, :contactPerson, :string
  end
end
