class Campground < ApplicationRecord
  has_many :reviews
  
  validates :name, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :amenities, presence: true
end