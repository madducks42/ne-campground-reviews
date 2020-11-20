class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, null: false
      t.belongs_to :campground, null: false
    end
  end
end
