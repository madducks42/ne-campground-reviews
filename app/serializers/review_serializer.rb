class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :campground, :title, :body, :rating

  belongs_to :user
  belongs_to :campground

end