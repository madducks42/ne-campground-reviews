class Image < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  
  has_many :campground_images
  has_many :campgrounds, through: :campground_images

  validates :image, presence: true
end