class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
      t.string :employer
      t.string :title
      t.date :startDate
      t.date :endDate
      t.text :role
      t.text :skills
      t.text :achievements
      t.references :user

      t.timestamps
    end
    add_index :positions, :user_id
  end
end
