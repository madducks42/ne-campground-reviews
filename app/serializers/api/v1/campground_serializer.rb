class Api::V1::CampgroundSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :amenities
end