class AddCompanyDetailsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :companyDetails, :text
  end
end
