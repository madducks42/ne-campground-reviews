class CampgroundImage < ApplicationRecord
  belongs_to :image
  belongs_to :campground

  validates :image, presence: true
  validates :campground, presence: true
end