class CampgroundShowSerializer < ActiveModel::Serializer
  attributes  :id, 
              :name, 
              :description,
              :caption, 
              :location,
              :zip_code,
              :campground_link,
              :dogs_allowed, 
              :electric_hookups, 
              :water_hookups, 
              :potable_water, 
              :dump_station, 
              :bathrooms, 
              :showers, 
              :userSignedIn, 
              :userIsAdmin,
              :isFavorite
              
  attribute :average_rating, key: :averageRating
  attribute :current_user, key: :currentUser

  has_many :reviews
  # has_many :images
  has_many :favorites
  has_many :users, through: :favorites

  def userSignedIn
    if !current_user
      return false
    else
      return true
    end
  end

  def isFavorite
    favorite_campground = false

    if !current_user
      return false
    else
      current_user.favorites.each { |campground|
        if campground.campground_id === object.id
          favorite_campground = true
        end
      }
    end
    return favorite_campground
  end

  def userIsAdmin
    if current_user.nil?
      false
    else
      current_user.role == "admin"
    end
  end
  
end