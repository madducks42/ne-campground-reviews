class AddCaption < ActiveRecord::Migration[5.2]
  def change
    add_column :campgrounds, :caption, :string, null: false, default: 'enter caption info'
  end
end
