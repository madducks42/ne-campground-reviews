class CampgroundImage < ApplicationRecord
  belongs_to :campground
  mount_uploader :image, CampgroundImageUploader
end