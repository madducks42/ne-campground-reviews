class AddCampgroundZipCode < ActiveRecord::Migration[5.2]
  def change
    add_column :campgrounds, :zip_code, :string
  end
end
