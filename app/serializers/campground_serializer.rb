class CampgroundSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :amenities
end