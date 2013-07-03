class AddBioToUsers < ActiveRecord::Migration
  def change
    add_column :users, :bio, :text, :default => "Your bio is a something you can use during your networking activities
please take time to overwrite this default message."
  end
end
