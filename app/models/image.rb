class Image < ActiveRecord::Base
  has_many :campground_images
  has_many :campgrounds, through: :campground_images

  mount_uploader :image, ImageUploader

  validates :name, presence: true
end