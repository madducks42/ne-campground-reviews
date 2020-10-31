class AddAmenitiesCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :campgrounds, :dogs_allowed, :boolean, null: false, default: false
    add_column :campgrounds, :electric_hookups, :boolean, null: false, default: false
    add_column :campgrounds, :water_hookups, :boolean, null: false, default: false
    add_column :campgrounds, :potable_water, :boolean, null: false, default: false
    add_column :campgrounds, :dump_station, :boolean, null: false, default: false
    add_column :campgrounds, :bathrooms, :boolean, null: false, default: false
    add_column :campgrounds, :showers, :boolean, null: false, default: false
  end
end
