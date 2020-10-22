class CreateCampgrounds < ActiveRecord::Migration[5.2]
  def change
    create_table :campgrounds do |t|
      t.string :name,         null: false
      t.string :description,  null: false
      t.string :location,     null: false
      t.string :amenities,    null: false

      t.timestamps
    end
  end
end
