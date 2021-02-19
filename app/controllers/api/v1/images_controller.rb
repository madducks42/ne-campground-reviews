class Api::V1::ImagesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    # binding.pry
    campground = Campground.find(params[:campground_id])
    images = campground.images

    render json: images
  end

  def create
    binding.pry
    new_image = Image.new(image_params)
    
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