class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :user_name, :null => false, :limit => 25
      t.string :password, :null => false, :limit => 15
      t.string :first_name, :null => false, :limit => 20
      t.string :last_name, :null => false, :limit => 20
      t.string :last_conversation
      t.attachment :image
      t.datetime :created_at
    end
  end

  def self.down
    remove_attachment  :users, :image
  end
end
