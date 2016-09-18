class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :content, :null => false, :limit => 2000
      t.datetime :created_at
    end
  end
end
