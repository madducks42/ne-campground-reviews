class Api::V1::CampgroundImagesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def create
    # binding.pry
    new_image = CampgroundImage.new(image_params)
    
    if new_image.save
      # binding.pry
      render json: new_image
    else
      render json: { errors: new_image.errors.full_messages }
    end

  end

  # def index
  #   # binding.pry
  #   render json: Campground.find(params[:campground_id]), serializer: CampgroundImageSerializer
  # end

  def image_params
    params.permit([:image, :campground_id])
  end
end