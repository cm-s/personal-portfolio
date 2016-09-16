class CreateMessengers < ActiveRecord::Migration
  def change
    create_table :messengers do |t|
      t.string :user_name, :null => false, :limit => 25
      t.string :password, :null => false, :limit => 15
      t.string :first_name, :null => false, :limit => 20
      t.string :last_name, :null => false, :limit => 20
      t.datetime :created_at
    end
  end
end
