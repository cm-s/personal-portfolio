class CreateUsers < ActiveRecord::Migration[5.0]
  def self.up
    create_table :users do |t|
      t.string :user_name
      t.string :password
      t.string :first_name
      t.string :last_name
      t.string :last_conversation
      t.attachment :image
      t.datetime :created_at
    end
  end

  def self.down
    remove_attachment :users, :image
  end
end
