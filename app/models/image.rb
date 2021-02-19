class Image < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  
  belongs_to :campground

  validates :image, presence: true
end