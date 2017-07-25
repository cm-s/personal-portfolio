class CreateUsers < ActiveRecord::Migration[5.0]
  def self.up
    create_table :users do |t|
      t.string :user_name, :null => false, :limit => 25
      t.string :password, :null => false, :limit => 35
      t.string :first_name, :null => false, :limit => 30
      t.string :last_name, :null => false, :limit => 30
      t.string :last_conversation
      t.attachment :image
      t.datetime :created_at
    end
  end

  def self.down
    remove_attachment :users, :image
  end
end
