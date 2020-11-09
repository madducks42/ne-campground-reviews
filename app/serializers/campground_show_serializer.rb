class CampgroundShowSerializer < ActiveModel::Serializer
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
              :userSignedIn, 
              :currentUser,
              :userIsAdmin
              
  attribute :average_rating, key: :averageRating
  attribute :current_user, key: :currentUser

  has_many :reviews
  
  def userSignedIn
    if !current_user
      return false
    else
      return true
    end
  end

  # def currentUser
  #   current_user
  # end

  # def userIsOwner
  #   current_user == object.user
  # end

  def userIsAdmin
    if current_user.nil?
      false
    else
      current_user.role == "admin"
    end
  end
  
end