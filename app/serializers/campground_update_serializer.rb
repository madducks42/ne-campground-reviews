class CampgroundUpdateSerializer < ActiveModel::Serializer
  attributes  :id, 
              :name, 
              :description,
              :caption, 
              :location,
              :campground_link,
              :dogs_allowed, 
              :electric_hookups, 
              :water_hookups, 
              :potable_water, 
              :dump_station, 
              :bathrooms, 
              :showers, 
              :userSignedIn

attribute :current_user, key: :currentUser
  
  def userSignedIn
    if !current_user
      return false
    else
      return true
    end
  end
  
end