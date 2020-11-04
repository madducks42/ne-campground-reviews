class AddPhotosToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :photos, :string
  end
end
