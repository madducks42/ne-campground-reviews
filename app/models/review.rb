class Review < ApplicationRecord
  belongs_to :campground
  belongs_to :user
  
  validates :title, presence: true
  validates :body, presence: true
  validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }

  validates :campground, presence: true
  validates :user, presence: true
end