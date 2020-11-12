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

ActiveRecord::Schema.define(version: 2020_11_09_180453) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campground_images", force: :cascade do |t|
    t.string "image", null: false
    t.bigint "campground_id", null: false
    t.index ["campground_id"], name: "index_campground_images_on_campground_id"
  end

  create_table "campgrounds", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "location", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "dogs_allowed", default: false, null: false
    t.boolean "electric_hookups", default: false, null: false
    t.boolean "water_hookups", default: false, null: false
    t.boolean "potable_water", default: false, null: false
    t.boolean "dump_station", default: false, null: false
    t.boolean "bathrooms", default: false, null: false
    t.boolean "showers", default: false, null: false
    t.string "caption", default: "enter caption info", null: false
    t.string "campground_link"
    t.string "zip_code"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.integer "rating", null: false
    t.bigint "user_id", null: false
    t.bigint "campground_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campground_id"], name: "index_reviews_on_campground_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "username", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role", default: "member", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
