class CreateCampgroundImages < ActiveRecord::Migration[5.2]
  def change
    create_table :campground_images do |t|
      t.string :image
      t.belongs_to :campground,  null: false
    end
  end
end
