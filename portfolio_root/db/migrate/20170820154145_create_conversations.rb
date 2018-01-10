class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.integer :user_id # Dies braucht folglich :index
      t.string :recipients
      t.timestamps
    end
    add_index :conversations, :user_id
  end
end
