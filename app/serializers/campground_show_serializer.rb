class CampgroundShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :dogs_allowed, :electric_hookups, :water_hookups, :potable_water, :dump_station, :bathrooms, :showers

  has_many :reviews
end