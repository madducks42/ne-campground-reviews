class Campground < ApplicationRecord
  has_many :reviews
  has_many :campground_images
  
  validates :name, presence: true
  validates :caption, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :zip_code, presence: true
  validates :dogs_allowed, inclusion: { in: [ true, false ] }
  validates :electric_hookups, inclusion: { in: [ true, false ] }
  validates :water_hookups, inclusion: { in: [ true, false ] }
  validates :potable_water, inclusion: { in: [ true, false ] }
  validates :dump_station, inclusion: { in: [ true, false ] }
  validates :bathrooms, inclusion: { in: [ true, false ] }
  validates :showers, inclusion: { in: [ true, false ] }

  def average_rating
    if self.reviews
      counter = 0
      self.reviews.each do |review|
        counter += review.rating
      end
      (counter.to_f/self.reviews.length.to_f).ceil(1)
    else
      "No ratings yet."
    end
  end
  
end