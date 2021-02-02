class CampgroundImageSerializer < ActiveModel::Serializer
  has_many :campground_images
  has_many :reviews

  # attributes  :id
              # :campground_images_array

#   def campground_images_array
#     # binding.pry
#     image_array = []

#     image_info = {:name => object.campground_images.first.image.identifier, :url => object.campground_images.first.image.path}
#     image_array.push(image_info)

#     return image_array
#   end

end