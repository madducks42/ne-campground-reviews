class Api::V1::CampgroundImagesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    campground = Campground.find(params[:campground_id])
    images = campground.campground_images

    render json: images
  end

  def create
    new_image = CampgroundImage.new(image_params)
    
    if new_image.save
      render json: new_image
    else
      render json: { errors: new_image.errors.full_messages }
    end

  end

  def image_params
    params.permit([:image, :campground_id])
  end
end