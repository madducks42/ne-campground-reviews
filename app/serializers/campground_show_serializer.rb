class CampgroundShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :amenities

  has_many :reviews
end