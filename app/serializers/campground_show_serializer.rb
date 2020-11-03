class CampgroundShowSerializer < ActiveModel::Serializer
  attributes  :id, 
              :name, 
              :description, 
              :location,
              :campground_link,
              :dogs_allowed, 
              :electric_hookups, 
              :water_hookups, 
              :potable_water, 
              :dump_station, 
              :bathrooms, 
              :showers, 
              :userSignedIn, 
              :currentUser
              
  attribute :average_rating, key: :averageRating

  has_many :reviews
  
  def userSignedIn
    if !current_user
      return false
    else
      return true
    end
  end

  def currentUser
    current_user
  end
  
end