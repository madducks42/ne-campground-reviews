class Favorite < ActiveRecord::Base
  belongs_to :user
  belongs_to :campground

  validates :user, presence: true
  validates :campground, presence: true
end