# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160916234746) do

  create_table "messages", force: :cascade do |t|
    t.text     "content",    limit: 65535, null: false
    t.datetime "created_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "user_name",          limit: 25,  null: false
    t.string   "password",           limit: 15,  null: false
    t.string   "first_name",         limit: 20,  null: false
    t.string   "last_name",          limit: 20,  null: false
    t.string   "last_conversation",  limit: 255
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
    t.datetime "created_at"
  end

end
