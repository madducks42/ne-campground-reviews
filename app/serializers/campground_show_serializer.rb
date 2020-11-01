class CampgroundShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :dogs_allowed, :electric_hookups, :water_hookups, :potable_water, :dump_station, :bathrooms, :showers, :user_signed_in, :currentUser

  has_many :reviews

  def user_signed_in
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