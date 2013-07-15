class AddBusinessNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :businessName, :string
  end
end
