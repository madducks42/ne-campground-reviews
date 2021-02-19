class CreateCampgroundImages < ActiveRecord::Migration[6.1]
  def change
    create_table :campground_images do |t|
      t.belongs_to :campground, null: false
      t.belongs_to :image, null: false
    end
  end
end
