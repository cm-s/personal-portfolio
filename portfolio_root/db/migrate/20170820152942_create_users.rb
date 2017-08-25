class CreateUsers < ActiveRecord::Migration[5.1]
	def change
		create_table :users do |t|
			t.string :user_name
			t.string :password
			t.string :first_name
			t.string :last_name
			t.integer :last_conversation
			t.datetime :created_at
		end
	end
end
