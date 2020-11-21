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
              :isFavorite,
              :weather
              
  attribute :average_rating, key: :averageRating
  attribute :current_user, key: :currentUser

  has_many :reviews
  has_many :campground_images
  has_many :favorites
  has_many :users, through: :favorites

  def weather
    client = OpenWeatherClient.new(object.zip_code)
    weather = client.format_weather_api_response

    return weather
  end
  
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