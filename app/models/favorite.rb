class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :campground

  validates :user, presence: true
  validates :campground, presence: true
end