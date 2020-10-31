class RemoveAmenitiesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :campgrounds, :amenities, :string
  end
end