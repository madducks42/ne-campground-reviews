class AddCampgroundLink < ActiveRecord::Migration[5.2]
  def change
    add_column :campgrounds, :campground_link, :string
  end
end
