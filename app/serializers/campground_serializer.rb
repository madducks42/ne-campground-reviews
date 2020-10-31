class CampgroundSerializer < ActiveModel::Serializer
  attributes :id, :name, :caption, :location
end