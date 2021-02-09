class CampgroundImageSerializer < ActiveModel::Serializer
  # has_many :campground_images
  # has_many :reviews

  # attribute  :images_info, key: :imagesInfo

  # def images_info
  #   image_array = []
  #   i = 0
  #   binding.pry
    
  #   while i < object.campground_images.length do
  #     image_info = {:id => object.campground_images[i].id,:name => object.campground_images[i].image.identifier, :url => object.campground_images[i].image.path}
      
  #     image_array.push(image_info)

  #     i += 1
  #   end

  #   return image_array
  # end

end