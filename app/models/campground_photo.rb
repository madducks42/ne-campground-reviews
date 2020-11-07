class CampgroundPhoto < ApplicationRecord
  belongs_to :campground
  mount_uploader :image, CampgroundPhotoUploader
end