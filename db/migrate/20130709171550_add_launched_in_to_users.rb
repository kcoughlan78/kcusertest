class AddLaunchedInToUsers < ActiveRecord::Migration
  def change
    add_column :users, :launchedIn, :date
  end
end
