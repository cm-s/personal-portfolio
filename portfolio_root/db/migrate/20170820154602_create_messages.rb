class CreateMessages < ActiveRecord::Migration[5.1]
	def change
		create_table :messages do |t|
			t.integer :conversation_id
			t.text :content
			t.datetime :read_at
			t.datetime :created_at
		end
		add_index :messages, :conversation_id
	end
end
