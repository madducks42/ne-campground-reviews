class Api::V1::CampgroundShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :amenities
end